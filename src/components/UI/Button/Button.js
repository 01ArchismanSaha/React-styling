import React from "react";

import "./Button.css";

const Button = (props) => {
  // console.log('inside button')
  // console.log(props.validity);
  
  return (
    <button
      type={props.type}
      className={`button ${!props.validity ? "invalid" : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
