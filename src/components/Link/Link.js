import React from "react";
import "./index.css";

const Link = ({ color, quote, author }) => {
  return (
    <button className="btn" type="button" style={{ background: color }}>
      <a
        id="tweet-quote"
        className="link"
        href={`https://twitter.com/intent/tweet/?text=${quote}%20-${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter"></i>
      </a>
    </button>
  );
};

export default Link;
