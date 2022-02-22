import React from "react";
import "../styles/offers.css";


function Offer({link,img,index}){
    return (
    <div className="offer-card">
        <a href={link}>
            <img src={img} alt={`${index} Offer`} />
        </a>
    </div>
    );
}

export default Offer;