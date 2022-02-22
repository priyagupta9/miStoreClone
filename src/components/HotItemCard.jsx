import React from "react";
import "../styles/hotItemCard.css";

function HotItemCard({name, price,img, index}){
    return(
        <div className="itemcard">
            <img src={img} alt={`${index} product`} />
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    );
}

export default HotItemCard;