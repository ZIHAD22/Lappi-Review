import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <nav className="flex justify-around items-center bg-slate-900 text-white py-3 ">
      <div>
        <CustomLink to="/" className="text-white">
          <h1 className="text-3xl">Lappi Review</h1>
        </CustomLink>
      </div>
      <div className="text-[18px] flex">
        <CustomLink className="m-2" to="/home">
          Home
        </CustomLink>
        <CustomLink className="m-2" to="/review">
          Review
        </CustomLink>
        <CustomLink className="m-2" to="/dashboard">
          DashBoard
        </CustomLink>
        <CustomLink className="m-2" to="/about">
          About
        </CustomLink>
      </div>
    </nav>
  );
};

export default Header;
