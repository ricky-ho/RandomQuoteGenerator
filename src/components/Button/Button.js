import React from "react";
import "./index.css";

const Button = ({ color, onClick }) => {
  return (
    <button
      id="new-quote"
      type="button"
      className="btn"
      style={{ background: color }}
      onClick={onClick}
    >
      New Quote
    </button>
  );
};

export default Button;
