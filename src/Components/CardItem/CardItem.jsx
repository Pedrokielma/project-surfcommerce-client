import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import "./CardItem.scss";

function CardItem(props) {
  const [itsFavorite, setItsFavorite] = useState()
  const storedToken = localStorage.getItem("authToken");

  

  const deleteFavorite = (itemId) => {
      axios.delete(
        `${process.env.REACT_APP_API_URL}/api/favorite/${itemId}`,
        {headers: { Authorization: `Bearer ${storedToken}` }})
        .then(() => props.favoriteItemsList())
      .then(()=> props.reload ? props.setReload(false) : props.setReload(true))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
   setItsFavorite(props.favorites.findIndex(x => x._id === props.id))
  }, [props.reload]);
console.log('favorites', props.favorites)
  
  console.log('ItsFavorite', itsFavorite)
  return (
      props.favorites && (
        <div className="single-item">
        <div className="item-image" style={{ backgroundImage: `url(${props.image})`}}>
          {
            itsFavorite != -1 ?  <AiFillHeart onClick={() => deleteFavorite(props.id)} className="heart-icon" /> :
            <AiOutlineHeart onClick={() => props.addFavorite(props.id, itsFavorite)}  className="heart-icon" />
          }
          {/* {
            favorite ? <AiFillHeart className='heart-icon'/> : <AiOutlineHeart className='heart-icon'/>
          } */}
        </div>
        <div className="item-info">
          <p className="item-category">{props.category}</p>
          <p className="item-name">
            <Link to={`/items/${props._id}`}>{props.title}</Link>
          </p>
          <p className="item-price">
            {props.price}$
          </p>
        </div>
  
      </div>
      )
  );
}

export default CardItem;
