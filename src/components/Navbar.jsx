import React from "react";
import "../styles/navbar.css";
// import {Link} from "react-router-dom"; //can not use this link direct fisrt use router in main parent component
import data from "../data/data.json";

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="black"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.5 14h-.79l-.28-.27C15.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);


function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img src={data.logo} alt="MIlogo" id="logoImg" />
        </a>
      </div>
      <div>
        <a className="navlinks" href="/miPhones">Mi Phones</a>
        <a className="navlinks" href="/redmiPhones">Redmi Phones</a>
        <a className="navlinks" href="/tv">TV</a>
        <a className="navlinks" href="/laptops">Laptops</a>
        <a className="navlinks" href="/lifestyle">Fitness & Lifestyle</a>
        <a className="navlinks" href="/home">Home</a>
        <a className="navlinks" href="/audio">Radio</a>
        <a className="navlinks" href="/accessories">Accessories</a>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search Products" />
        {searchIcon}
      </div>
    </div>
  );
}

export default Navbar;

















