import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CardItem.scss";
import AiFillHeart from "react-icons/ai";
import AiOutlineHeart from "react-icons/ai";

function CardItem(props) {
  const [favorite, setFavorite] = useState();
  return (
    <div className="single-item">
      <div className="item-image">
        <img alt="" src={`${props.image}`} />
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

      <button className="btn" onClick={() => props.favoriteItem(props.id)}>
        Add to favorite
      </button>
    </div>
  );
}

export default CardItem;
