import React from "react";

const Button = props => (
  <button
    onClick={props.onClick}
    className={props.className}
    disable={props.disable}
  >
    {props.value}
  </button>
);
export default Button;
