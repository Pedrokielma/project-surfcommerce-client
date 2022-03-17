import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Searchbar from '../../Components/Searchbar/Searchbar'
import './ItemListPage.css';
// import { ThemeContext } from '../../context/theme.context';

function ItemsListPage() {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const storedToken = localStorage.getItem('authToken');
  

  // const { theme } = useContext(ThemeContext);

  const fetchItems = async () => {
    try {
    

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/items`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setItems(response.data);
      setDisplayItems(response.data)


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const favoriteItem = (itemId) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/favorite/${itemId}`, {}, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => console.log(itemId))
      .catch((err) => console.log(err))
  };

 
  const searchFilter = (searchQuery) => {
    let filteredItems = items.filter((item) =>
      item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log(filteredItems);
    setDisplayItems(filteredItems);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
   
  };

  return (
    <div className="items-page-main">
    <Searchbar search={searchFilter} />

      {/* <AddForm refreshItems={fetchItems} /> */}
      {displayItems.map((item) => {
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
			<h2><Link to={`/items/${item._id}`}>{item.title} </Link> </h2>
      <h6>{item.category}</h6>
			
      <button className="btn" onClick={() => favoriteItem(item._id)}>Add to favorite</button>
		</div>
	</div>
</div>

        

        );
      })}


      {/* <div key={item._id}>
            <Link to={`/items/${item._id}`}>
              <h3>{item.title}</h3>
            </Link>
            {console.log(item._id)}
            <button onClick={() => favoriteItem(item._id)}>Add to favorite</button>
          </div> */}
      
     
 
    </div>


  );
}

export default ItemsListPage;
  {/* <div key={item._id} className="courses-container">
	<div className="course">
		<div styles={{ backgroundImage:`url(${item.image})` }}>
			
		</div>
		<div className="course-info">
			<div className="progress-container">
				<div className="progress"></div>
				<span className="progress-text">
					6/9 Challenges
				</span>
			</div>
			<h2>{item.title}</h2>
      <h6>{item.description}</h6>
			<button className="btn">Continue</button>
      <button className="btn" onClick={() => favoriteItem(item._id)}>Add to favorite</button>
		</div>
	</div>
</div> */}
