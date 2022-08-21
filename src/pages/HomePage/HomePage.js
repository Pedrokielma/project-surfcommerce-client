import React, { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import image from "../../images/backgroundImage.jpg";
import image2 from "../../images/image 26.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import BoardCauculator from './Components/BoardCauculator.jsx'
import GreenButton from "../../Components/GreenButton/GreenButton";

import "./HomePage.scss";

function HomePage() {
  const { loggedIn, isLoading } = useContext(AuthContext);

  const { user, storeToken, authenticateUser } = useContext(AuthContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!loggedIn && isLoading) {
      storeToken(token);
      authenticateUser();
    }
  }, []);

  return (
    <main className="main">
      <Navbar></Navbar>
      <section
        id="first-section"
        className="first-section"
        styles={{ backgroundImage: `url(${image})` }}
      >
        <div className="home-container">
          <h1 className="title">
            {" "}
            DUCK <br /> <span> DIVE</span>{" "}
          </h1>
          <p>Find, buy & sell surf hardware </p>
          <button className="link-seeItems">
            <Link to="/items">See Items</Link>
          </button>
        </div>
      </section>
      <section id="second-section" className="second-section">
      <BoardCauculator />
      </section>
    </main>
  );
}

export default HomePage;
