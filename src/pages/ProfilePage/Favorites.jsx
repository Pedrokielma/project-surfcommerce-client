import React, { useState, useEffect } from 'react';
import ProfileNav from "../../Components/ProfileNav/ProfileNav";
import axios from 'axios';


function Favorites() {
  // const [favoriteItems, setFavoriteitems] = useState([]);

  //   // const { theme } = useContext(ThemeContext);
  
  //   const fetchItems = async () => {
  //     try {
  //       const storedToken = localStorage.getItem('authToken');
  
  //       let response = await axios.get(`http://localhost:5005/api/myadds`, {
  //         headers: { Authorization: `Bearer ${storedToken}` },
  //       });
  //       setFavoriteitems(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  
  //   useEffect(() => {
  //     fetchItems();
  //   }, []);


  return (
    <div>
    <ProfileNav />
    <h1>Favorite Items</h1>
     {/* {favoriteItems.map((item) => {
       return (
         <>
         <h3>{item.title}</h3>
         </>
       )
     })} */}
    </div>
  )
}

export default Favorites