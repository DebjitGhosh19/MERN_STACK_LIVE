import React from "react";
import css from "./Input.module.css";
const Input = ({ OnChangeHandelar }) => {
  // const OnChangeHandelar=(event)=>console.log(event.target.value)
  return (
    <input
      type="text"
      placeholder="Enter Food Item"
      className={css.input}
      onKeyDown={OnChangeHandelar}
    />
  );
};

export default Input;
