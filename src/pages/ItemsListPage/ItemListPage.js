import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { ThemeContext } from '../../context/theme.context';

function ItemsListPage() {
  const [items, setItems] = useState([]);

  // const { theme } = useContext(ThemeContext);

  const fetchItems = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      let response = await axios.get(`http://localhost:5005/api/items`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div >
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="item" onChange={handlePokemonInput} />
        <button>Search</button>
      </form> */}
    <input type="text" placeholder='Serach...' />
      {/* <AddForm refreshItems={fetchItems} /> */}
      {items.map((item) => {
        return (
          <div key={item._id}>
            <Link to={`/items/${item._id}`}>
              <h3>{item.title}</h3>
            </Link>
            {console.log(item._id)}
          </div>
        );
      })}
    </div>
  );
}

export default ItemsListPage;
