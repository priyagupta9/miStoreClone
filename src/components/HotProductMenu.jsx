import React from "react";
import "../styles/hotProduct.css";
// import HotSection from "./HotSection";
// import data from "../data/data.json"
import {Link} from "react-router-dom";


function HotProductMenu() {
  return (
    <div className="hotMenu-wrapper">
      <Link className="hotMenuLink" to="/music">Music Store</Link>
      <Link className="hotMenuLink" to="/smartDevices">Smart Devices</Link>
      <Link className="hotMenuLink" to="home">Home</Link>
      <Link className="hotMenuLink" to="/lifeStyle">Lifestyle</Link>
      <Link className="hotMenuLink" to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  );
}

export default HotProductMenu;