import React, { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import image from "../../images/backgroundImage.jpg";
import image2 from "../../images/image 26.jpg";
import Navbar from "../../Components/Navbar/Navbar";
// import BoardCauculator from './Components/BoardCauculator.jsx'
import SubmmitButton from "../../Components/SubmmitButton/SubmmitButton";

import "./HomePage.css";

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
        <div className="calculate-board-div">
          <img src={image2} alt="surfers" />
          <form className="calculate-board-form" action="">
            <div>
              <h2>Find Your best board</h2>
              <p>
                Dont know wich surfboard is better for you? <br /> we can help
                you
              </p>
            </div>
            <div className="div-inputs">
              <label htmlFor="level" id="level" placeholder="Begginer">
                Surf level
              </label>
              <input
                type="select"
                name="username"
                className="input-board-ccalculate"
                value="#"
                onChange="#"
              />
            </div>

            <div className="div-inputs">
              <label htmlFor="weigth">Weigth</label>
              <input
                type="password"
                name="password"
                className="input-board-ccalculate"
                value="#"
                onChange="#"
              />
            </div>

            <div className="div-inputs">
              <label htmlFor="style">Style</label>
              <input
                type="password"
                name="password"
                className="input-board-ccalculate"
                value="#"
                onChange="#"
              />
            </div>
            <SubmmitButton content="Calculate" />
          </form>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
