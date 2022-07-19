import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import image from "../../images/logoduckdive.png";
import Navlink from "../Navlink/Navlink.jsx";

import style from  "./Navbar.scss";

function Navbar() {

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <Link className="logo-link" to="/">
        <img src={image} className="logo" alt="duckdive" />
      </Link>

      <ul className={active}>
      <Navlink herf="/items" content='Store'/>
        {loggedIn && (
          <>
          <Navlink herf="/profile" content='Profile'/>
          <Navlink herf="/" content='Logout' logoutUser={logoutUser}/>
          </>
        )}
        {!loggedIn && (
          <>
          <Navlink herf="/signup" content='Signup'/>
          <Navlink herf="/login" content='Login'/>
          </>
        )}
      </ul>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;