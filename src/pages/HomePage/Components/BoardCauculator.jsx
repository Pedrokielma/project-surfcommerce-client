import React from "react";
import image2 from "../../../images/image 26.jpg";
import GreenButton from "../../../Components/GreenButton/GreenButton";
import InputForm from "../../../Components/InputForm/InputForm";

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

        <InputForm 
          name="username"
          title='Surf level'
          type='select'
          placeholder='placeholder'
          handleSubmit='#'
        />
         <InputForm 
          name="text"
          title='Weigth'
          type='number'
          placeholder='placeholder'
          handleSubmit='#'
        />
         <InputForm 
          name="text"
          title='Style'
          type='select'
          placeholder='placeholder'
          handleSubmit='#'
        />
         
        </div>
        <GreenButton content="Calculate" />
      </form>
    </div>    
  );
}

export default BoardCauculator;
