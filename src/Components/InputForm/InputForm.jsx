import React from "react";

function InputForm(props) {
  return (
    <div className="login-form-div">
      <label htmlFor={props.name} id={props.name}>
        {props.title}
      </label>
      <input
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
