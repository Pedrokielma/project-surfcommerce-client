import React from "react";
import image2 from "../../../images/image 26.jpg";
import SubmmitButton from "../../../Components/SubmmitButton/SubmmitButton";

import "./BoardCauculator.scss";

function BoardCauculator() {
  return (
    <div className="calculate-board-div">
      <img src={image2} alt="surfers" />
      <form className="calculate-board-form" action="">
        <div>
          <h2>Find Your best board</h2>
          <p>
            Dont know wich surfboard is better for you? <br /> we can help you
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
  );
}

export default BoardCauculator;
