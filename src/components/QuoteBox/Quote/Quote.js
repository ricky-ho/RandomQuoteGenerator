import React from "react";
import "./index.css";

const Quote = ({ color, quote, author }) => {
  return (
    <div>
      <p id="text" style={{ color: color }}>
        <i className="fa fa-quote-left"></i>
        {quote}
        <i className="fa fa-quote-right"></i>
      </p>
      <p id="author" style={{ color: color }}>
        - {author}
      </p>
    </div>
  );
};

export default Quote;
