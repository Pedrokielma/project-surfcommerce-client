import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../../Components/Comments/Comments'

function ItemDetails() {
  const [item, setItem] = useState(null);
  const [comment, setComment] = useState(null);
  const { itemId } = useParams();

  const fetchItem = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`);
      setItem(response.data); console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
     <Link to="/items"> Back to Item List</Link>
     
      {item && (
        <>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          
          <Comment fetchItem= {fetchItem} />
          
          {item.comments.map((comment) => {
           return  <p>{comment.content}</p>
          })}
           
        </>
      )}
    </div>
  );
}

export default ItemDetails;
