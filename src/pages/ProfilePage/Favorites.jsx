import React, { useState, useEffect } from 'react';
import ProfileNav from "../../Components/ProfileNav/ProfileNav";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProfilePage.css';


function Favorites() {
  const [favoriteItems, setFavoriteitems] = useState([]);

  
    const fetchItems = async () => {
      try {
        const storedToken = localStorage.getItem('authToken');
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/myadds`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setFavoriteitems(response.data.favitems);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchItems();
    }, []);


  return (
    <div className='items-page-main'>
    <ProfileNav />
    <h1>Favorite Items</h1>
     {favoriteItems.map((item) => {
       return (

         <div className="courses-container">
	<div className="course">
		<div styles={{ backgroundImage:`url('${item.image}')` }}>
			
		</div>
		<div className="course-info">
			<div className="progress-container">
				
			<h6>
					<b>{item.price}$</b>
          </h6>
			</div>
			<h2>{item.title}</h2>
      <h6>{item.category}</h6>
			
      <Link className="btn"  to={`/items/edit/${item._id}`}>Delete </Link>
		</div>
	</div>
</div>
         
       )
     })}
    </div>
  )
}

export default Favorites