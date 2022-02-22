import React from "react";
import "../styles/heading.css";

function Heading({ text }) {
  return (
  <div className="heading">
    <div></div>
    <h1>{text}</h1>
    <div></div>
  </div>
  );
}

export default Heading;
