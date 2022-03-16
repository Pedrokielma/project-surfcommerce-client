import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';


import ProfileNav from "../../Components/ProfileNav/ProfileNav";

  function AddItem() {
    const { user, userAuth } = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState(0);
    const [price, setPrice] = useState('');
    
  
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
    const body = { title, description, image, category, price, user: user._id }
    axios
        .post(`${process.env.REACT_APP_API_URL}/api/items`, body)
        .then((response) => {
          console.log(response);
          setTitle('');
          setDescription('');
          setImage('');
          setCategory(0);
          setPrice('');


          navigate('/items');
        })
        .catch((err) => console.log(err));
    };
    
    return (
      <div>
         <ProfileNav />
  
         <h3>Post Item</h3>
         
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="text">Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
          <label htmlFor="title">Image</label>
          <input type="text" onChange={(e) => setImage(e.target.value)} />
          <label htmlFor="title">Category</label>
          <input type="text" onChange={(e) => setCategory(e.target.value)} />
          <label htmlFor="title">Price</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
          <button type="submit">Post Add</button>
        </form>
        {console.log()}
      </div>
    )
  }

export default AddItem;


