import React from "react";
import useReview from "../../hooks/useReview";

const CustomerReview = ({ short }) => {
  const [review, setReview] = useReview();
  return (
    <div>
      <h1>{review.length}</h1>
    </div>
  );
};

export default CustomerReview;
