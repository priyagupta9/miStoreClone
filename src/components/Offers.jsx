import React from "react";
import "../styles/offers.css";
import Offer from "./Offer"

function Offers({offers}) {
  return (
    <div className="offer-wrapper">
        {offers.map((offer,index) => (
            <Offer key={offer.image} index={index} link={offer.url} img={offer.image}  />
        ))}
    </div>
  );
}

export default Offers;
