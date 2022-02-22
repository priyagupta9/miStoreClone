import React from "react";
import "../styles/starProduct.css";

function StarProduct({ prods }) {
    return (
      <div className="starProd-wrapper">
        <div>
          <a href={prods[0].url}>
            <img src={prods[0].image} alt="1st Product" />
          </a>
        </div>
        <div>
            <a href={prods[1].url}>
                <img src={prods[1].image} alt="1st Product" />
            </a>
            <a href={prods[2].url}>
                <img src={prods[2].image} alt="1st Product" />
            </a>
            <a href={prods[3].url}>
                <img src={prods[3].image} alt="1st Product" />
            </a>
        </div>
      </div>
    );
}

export default StarProduct;
