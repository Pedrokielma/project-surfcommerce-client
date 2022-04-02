import React from "react";
import "./Footer.css";
import { AiFillInstagram }from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section className="first-footer-sec">
        <h2>
          Duck <br /> Dive
        </h2>
        <div className="create-accont">
          <p>Not a member yet?</p>
          <button>Create Account</button>
        </div>
      </section>
      <hr />
      <section className="second-footer-sec">
        <ul className="first-ul">
          <a href="/" >Home</a>
          <a href="#second-section" >Find you board</a>
          <Link to="/items" >Store</Link>
        </ul>
        <ul className="second-ul">
          <a className="react-icons-social" href="https://www.instagram.com"> <AiFillInstagram /></a>
          <a className="react-icons-social" href="https://telegram.org/"><BsTelegram /></a>
        </ul>
      </section>
      <p className="footer-paragraf">© 2022 Duck Dive. All rights reserved</p>
    </footer>
  );
}

export default Footer;
