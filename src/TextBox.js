import React from "react";

const TextBox = props => (
  <textarea value={props.content} onChange={props.onTextBoxChange} />
);
export default TextBox;
