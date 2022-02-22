import React from "react";
import "../styles/productReview.css";

function ProductReviewCard({img,name,review,price,index}){
    return (
      <div className="review-card">
        <img src={img} alt={`${index} review`} />
        <div className="review">
          <h1>{review}</h1>
          <div className="review-info">
            <p>{name}</p>
            <span>{price}</span>
          </div>
        </div>
      </div>
    );
}
export default ProductReviewCard;