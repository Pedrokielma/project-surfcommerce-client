import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ItemDetails() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  const fetchItem = async () => {
    try {
      let response = await axios.get(`http://localhost:5005/api/items/${itemId}`);
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      {item && (
        <>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </>
      )}

      <Link to="/items"> Back to Item List</Link>
    </div>
  );
}

export default ItemDetails;
