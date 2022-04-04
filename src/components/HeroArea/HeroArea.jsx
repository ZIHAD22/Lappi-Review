import React from "react";
import laptopLogo from "../../img/laptop.png";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const HeroArea = () => {
  return (
    <div className="grid grid-cols-2 bg-cyan-100 pt-5 pb-5 h-[705px]">
      <div className="order-1 flex items-center justify-center ">
        <img src={laptopLogo} alt="" />
      </div>
      <div className="order-none my-auto m-4">
        <h1 className="text-6xl tracking-wide">Best laptop of The Year</h1>
        <p className=" tracking-wide text-[18px] pt-14">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          laudantium rem ab ut velit consequatur voluptates labore natus beatae
          assumenda voluptatibus explicabo eligendi unde expedita ex, non
          obcaecati quaerat sed vero aut!
        </p>
        <button className="bg-slate-900 text-white flex justify-center hover:bg-[#3E4CF3] duration-500 px-14 py-3 rounded-xl mt-14">
          Bye Now <ArrowNarrowRightIcon className="w-6 ml-2 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroArea;
