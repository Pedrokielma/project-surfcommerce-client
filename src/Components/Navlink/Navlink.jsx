import React from "react";
import { Link } from "react-router-dom";

function Navlink(props) {
  return (
    <>
      <Link className="nav__link link" to={props.herf}>
        {props.content}
      </Link>
    </>
  );
}

export default Navlink;
