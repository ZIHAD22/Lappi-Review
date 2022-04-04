import React from "react";
import useReview from "../../hooks/useReview";
import ReviewItem from "../ReviewItem/ReviewItem";

const CustomerReview = ({ short }) => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="mb-9">
      <h1 className="text-center my-7 text-5xl font-serif">
        Customer Say About Products{" "}
        <span className="text-orange-500">({reviews.length})</span>
      </h1>
      <div className="grid grid-cols-3 gap-7 drop-shadow-2xl  p-6 min-h-[705px]">
        {reviews.map((review) => (
          <ReviewItem key={review.id} reviews={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
