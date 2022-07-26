import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import Searchbar from "../../Components/Searchbar/Searchbar";
import LocationsModal from "../../Components/LocationModal/LocationsModal.jsx";
import CardItem from "../../Components/CardItem/CardItem";

import "./ItemListPage.css";

function ItemsListPage() {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  const storedToken = localStorage.getItem("authToken");

  // butons to filter location and price
  const [isOpen, setIsOpen] = useState(false);

  const fetchItems = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/items`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setItems(response.data);
      setDisplayItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const favoriteItem = (itemId) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/favorite/${itemId}`,
        {},
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then(() => console.log(itemId))
      .catch((err) => console.log(err));
  };

  const searchFilter = (searchQuery) => {
    let filteredItems = items.filter((item) =>
      item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log(filteredItems);
    setDisplayItems(filteredItems);
  };

  const locationFilter = (filters) => {
    console.log(displayItems);
    console.log("epa", filters);
    // setDisplayItems(locatedItems);
  };

  const handleFormSubmit = (loc) => {
    let submitFilteredItems = items.filter((item) =>
      loc.includes(item.location)
    );

    setIsOpen(false);
    setDisplayItems(submitFilteredItems);

    console.log(loc);
    console.log(displayItems);
    console.log(isOpen);
  };

  return (
    <div className="items-page-main">
      <div className="items-serchbar">
        <Searchbar search={searchFilter} />
      </div>
      <div className="nav-filter">
        <nav className="nav-filter-one">
          <ul>
            <li>
              <Link to="/profile"> All</Link>
            </li>
            <li>
              <Link to="/profile"> Wet Suit</Link>
            </li>
            <li>
              <Link to="/profile"> Boards</Link>
            </li>
            <li>
              <Link to="/profile"> Assesories</Link>
            </li>
          </ul>
        </nav>
        <nav className="nav-filter-two">
          <ul>
            <button onClick={() => setIsOpen(true)}>
              <span>Location</span>{" "}
              <MdOutlineKeyboardArrowDown className="nav-filter-icons" />{" "}
            </button>

            <LocationsModal
              filters={(filters) => locationFilter(filters)}
              open={isOpen}
              onClick={() => setIsOpen(false)}
              submit={(location) => handleFormSubmit(location)}
            />

            {/* <button ><span>Location</span> <MdOutlineKeyboardArrowDown className="nav-filter-icons"/> </button> */}
            {/* <LocationsModal /> */}

            <li>
              <button>
                <span>Prices</span>{" "}
                <MdOutlineKeyboardArrowDown className="nav-filter-icons" />
              </button>{" "}
            </li>
          </ul>
        </nav>
      </div>

      <section className="item-list">
        {/* <AddForm refreshItems={fetchItems} /> */}
        {displayItems.map((item) => {
          return (
            <CardItem
              image={item.image}
              category={item.category}
              id={item._id}
              title={item.title}
              price={item.price}
              favoriteItem={favoriteItem}
            />
          );
        })}
      </section>
    </div>
  );
}

export default ItemsListPage;

{
  /* <div className="single-item">
            
              <div className="item-image" >
              <img alt="" src={`${item.image}`}/>
              </div>
              <div className="item-info">
              <h6 className="item-category"> <h6>{item.category}</h6></h6>
              <h4 className="item-name">
                  <Link to={`/items/${item._id}`}>{item.title} </Link>{" "}
                </h4>
              <h6 className="item-price">
                <b>{item.price}$</b>
              </h6> 
              </div>            

                <button className="btn" onClick={() => favoriteItem(item._id)}>
                  Add to favorite
                </button>
              </div>
           */
}
