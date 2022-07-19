import React from "react";
import { Link } from "react-router-dom";

import './Navlink.scss'

function Navlink(props) {
  return (
    <>
      <Link className="link" onClick={props.logoutUser} to={props.herf}>
        {props.content}
      </Link>
    </>
  );
}

export default Navlink;
