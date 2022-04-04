import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewItem = (props) => {
  const { name, description, rating, img } = props.review;
  const ratingStar = {
    size: 30,
    value: rating,
    isHalf: true,
    edit: false,
  };
  return (
    <div className="flex flex-col justify-center items-center drop-shadow-2xl bg-white rounded-2xl">
      <div className="w-[95px] h-[95px] rounded-[50%] border-8 overflow-hidden my-4">
        <img src={img} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl mb-2">{name}</h1>
        <p className="mb-2 flex justify-center">
          <ReactStars {...ratingStar} />
        </p>
        <p className="text-[18px] px-7 pb-4" title={description}>
          {description.length > 90
            ? description.slice(0, 250) + " ..."
            : description}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
