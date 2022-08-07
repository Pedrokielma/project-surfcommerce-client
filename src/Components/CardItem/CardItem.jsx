import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import "./CardItem.scss";

function CardItem(props) {
  const [favorites, setFavorites] = useState(props.favorites);
  const [itsFavorite, setItsFavorite] = useState()


  console.log(`itsFavorite ${props.id}`, itsFavorite)
  const deleteFavorite = (itemId) => {
      axios.delete(
        `${process.env.REACT_APP_API_URL}/api/favorite/${itemId}`,
        {},
        {
          headers: { Authorization: `Bearer ${props.storedToken}` },
        }
      )
      .then(() => console.log(itemId))
      .catch((err) => console.log(err));
 
  };

  useEffect(() => {
    setItsFavorite(favorites.findIndex(x => x._id === props.id))
    console.log('opa', favorites, itsFavorite)
  }, [props.reload]);

  return (
    <div className="single-item">
      <div className="item-image" style={{ backgroundImage: `url(${props.image})`}}>
        {
          itsFavorite !== -1 ?  <AiFillHeart className="heart-icon" /> :
          <AiOutlineHeart className="heart-icon" />
        }
        {/* {
          favorite ? <AiFillHeart className='heart-icon'/> : <AiOutlineHeart className='heart-icon'/>
        } */}
      </div>
      <div className="item-info">
        <p className="item-category">{props.category}</p>
        <p className="item-name">
          <Link to={`/items/${props._id}`}>{props.title} </Link>
        </p>
        <p className="item-price">
          <b>{props.price}$</b>
        </p>
      </div>

      <button className="btn" onClick={() => props.addFavorite(props.id)}>
        Add to favorite
      </button>
    </div>
  );
}

export default CardItem;
