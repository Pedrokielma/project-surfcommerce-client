import React from "react";

import './InputForm.scss'

function InputForm(props) {
  return (
    <div className="input-form">
      <label className="input-label" htmlFor={props.name} id={props.name}>
        {props.title}
      </label>
      <input
      className="input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleSubmit}
      />
    </div>
  );
}

export default InputForm;
