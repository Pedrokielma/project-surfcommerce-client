import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditItemPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { itemId } = useParams();

  const navigate = useNavigate();

  const deleteItem = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`)
      .then(() => navigate('/items'));
  };

  const fetchItem = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/items/${itemId}`);
      let { title, description } = response.data;
      setTitle(title);
      setDescription(description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, description };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`, body)
      .then((response) => {
        setTitle('');
        setDescription('');
        navigate(`/items/${itemId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Item</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Edit Item</button>
      </form>
      <button onClick={deleteItem}> Delete Item</button>
    </div>
  );
}

export default EditItemPage;
