import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../../Components/Comments/Comments'
import './ItemDetailsPage.css';

function ItemDetails() {
  const [item, setItem] = useState(null);
  const [comment, setComment] = useState(false);
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
    <div className='main-page'>
     <Link to="/items"> Back to Item List</Link>
     
      {item && (
        <>
          <h1>{item.title}</h1>
          <p>{item.description}</p>

          <button onClick={() => setComment(!comment)}>Show Comments</button>
          
          <Comment fetchItem= {fetchItem} />
          
          {comment && item.comments.map((comment) => {
           return  <p>{comment.content}</p>
          })}
           
        </>
      )}
    </div>
  );
}

export default ItemDetails;
