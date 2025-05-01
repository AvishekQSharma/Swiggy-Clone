import React from "react";
import "./FloatingInput.css";

const FloatingInput = ({ label, type, name }) => {
  return (
    <div className="floating-input ">
      <input type={type} name={name} placeholder=" " />
      <label>{label}</label>
    </div>
  );
};

export default FloatingInput;
