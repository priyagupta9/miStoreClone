import React from "react";
import "../styles/navOptions.css";

function NavOCard({name,price,img,index}){
    return (
        <div className="NavCard">
            <img src={img} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default NavOCard;