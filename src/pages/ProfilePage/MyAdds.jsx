import React, { useState, useEffect } from 'react';
import ProfileNav from "../../Components/ProfileNav/ProfileNav";
import './ProfilePage.css';

import axios from 'axios';
import { Link } from 'react-router-dom';

// import { user } from '../../context/auth.context';
// import React, { useState, useContext } from 'react';

function MyAdds() {
    // const { myUser, userInfo } = useContext(user);
    const [items, setItems] = useState([]);

  
  
    const fetchItems = async () => {
      try {
        const storedToken = localStorage.getItem('authToken');
  
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/myadds`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setItems(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchItems();
    }, []);



  return (
  <div className="profile-page-main" >
   <ProfileNav />
  {/* <form onSubmit={handleSubmit}>
    <input type="text" name="item" onChange={handlePokemonInput} />
    <button>Search</button>
  </form> */}
{/* <input type="text" placeholder='Serach...' /> */}
  {/* <AddForm refreshItems={fetchItems} /> */}
  
  {items.map((item) => {
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

      <Link className="btn"  to={`/items/edit/${item._id}`}>Edit </Link>
      
		</div>
	</div>
</div>
    );
  })}
</div>

  

)
}

export default MyAdds


{/* <div key={item._id}>
      {console.log(item)}
        <Link to={`/items/edit/${item._id}`}>
          <h3>{item.title}</h3>
        </Link>
        {console.log(item._id)}
      </div> */}
  