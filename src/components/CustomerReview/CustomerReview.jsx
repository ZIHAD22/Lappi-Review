import React from "react";
import useReview from "../../hooks/useReview";
import ReviewItem from "../ReviewItem/ReviewItem";

const CustomerReview = ({ short }) => {
  const [reviews, setReviews] = useReview();
  return (
    <div
      id="review"
      className="mb-9 min-h-[705px] flex flex-col justify-center"
    >
      <h1 className="text-center my-7 text-5xl font-serif">
        Customer Say About Products
        <span className="text-orange-500">({reviews.length})</span>
      </h1>
      <div className="grid sm:grid-cols-1  lg:grid-cols-3 gap-7 p-6">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
