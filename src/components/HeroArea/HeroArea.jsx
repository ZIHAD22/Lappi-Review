import React from "react";
import laptopLogo from "../../img/laptop.png";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import useReview from "../../hooks/useReview";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useNavigate } from "react-router-dom";

const HeroArea = () => {
  const [reviews, setReviews] = useReview(true);
  let navigate = useNavigate();

  const handleReview = () => {
    navigate("/review");
  };
  return (
    <div>
      <div className="grid sm:grid-cols-1  lg:grid-cols-2 bg-cyan-100 pt-5 pb-5 sm:h-full lg:h-screen">
        <div className="lg:order-1 flex items-center justify-center ">
          <img src={laptopLogo} alt="" />
        </div>
        <div className="lg:order-none  my-auto m-4">
          <h1 className="text-6xl tracking-wide">Best laptop of The Year</h1>
          <p className=" tracking-wide text-[18px] pt-14">
            The most powerful MacBook Pro ever is here. With the blazing-fast M1
            Pro or M1 Max chip — the first Apple silicon designed for pros — you
            get groundbreaking performance and amazing battery life. Add to that
            a stunning Liquid Retina XDR display, the best camera and audio ever
            in a Mac notebook, and all the ports you need.
          </p>
          <button
            onClick={handleReview}
            className="bg-slate-900 text-white flex justify-center sm:mx-auto lg:mx-0 hover:bg-[#3E4CF3] duration-500 px-14 py-3 rounded-xl mt-14"
          >
            See Review <ArrowNarrowRightIcon className="w-6 ml-2 h-6" />
          </button>
        </div>
      </div>
      <div className="lg:h-screen lg:flex lg:flex-col lg:justify-center">
        <h1 className="text-center my-7 text-5xl font-serif">
          Customer Say About Products{" "}
          <span className="text-orange-500">({reviews.length})</span>
        </h1>
        <div className="grid sm:grid lg:grid-cols-3 gap-7 my-6 mx-6">
          {reviews.map((review) => (
            <ReviewItem review={review} />
          ))}
        </div>
        <button
          onClick={handleReview}
          className="bg-[#3E4CF3] text-white flex justify-center lg:w-1/4 mb-6 mx-auto hover:bg-slate-900 duration-500 px-14 py-3 rounded-xl mt-14"
        >
          <a href="#review">See All Review</a>
        </button>
      </div>
    </div>
  );
};

export default HeroArea;
