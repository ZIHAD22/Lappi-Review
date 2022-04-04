import React from "react";

const ReviewItem = (props) => {
  const { name, description, rating, img } = props.reviews;

  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-2xl">
      <div className="w-[95px] h-[95px] rounded-[50%] border-8 overflow-hidden my-4">
        <img src={img} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl mb-2">{name}</h1>
        <p className="mb-2">
          Rating: <span className="text-orange-500">{rating}</span>
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
