import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';


import ProfileNav from "../../Components/ProfileNav/ProfileNav";

  function Comments(props) {
    const { user, userAuth } = useContext(AuthContext);
    const { itemId } = useParams();
    const [content, setContent] = useState('');
    
  
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const storedToken = localStorage.getItem('authToken');

    const body = { user: user._id, content }
    axios
        .post(`${process.env.REACT_APP_API_URL}/${itemId}`, body, 
        {headers: { Authorization: `Bearer ${storedToken}` }})
        .then((response) => {
          props.fetchItem()
          console.log(response);
          setContent('');


        //   navigate('/items');
        })
        .catch((err) => console.log(err));
        };
    
    return (

      <div>
         
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" onChange={(e) => setContent(e.target.value)} />
          <button type="submit">Comment</button>
        </form>
        {console.log()}
      </div>
    )
  }

export default Comments;