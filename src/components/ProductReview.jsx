import React from "react";
import ProductReviewCard from "./ProductReviewCard";
import "../styles/productReview.css";

function ProductReview({reviews}) {
  return (
    <div className="review-wrapper">
      {reviews.map((review, index) => (
        <ProductReviewCard
          key={review.image}
          img={review.image}
          review={review.review}
          name={review.name}
          price={review.price}
          index={index}
        />
      ))}
    </div>
  );
}

export default ProductReview;
        // <div className="review-card">
        //   <img src={review.image} alt={`${index} review`} />
        //   <div className="review">
        //     <h1>{review.review}</h1>
        //     <div className="review-info">
        //         <p>{review.name}</p>
        //         <span>{review.price}</span>
        //     </div>
        //   </div>
        // </div>