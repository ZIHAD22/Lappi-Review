import React from "react";
import { UserIcon } from "@heroicons/react/solid";
const BlogItem = ({ blog: { title, description, publisher, img } }) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 w-5/6 mx-auto shadow-2xl mt-6 mb-9">
      <div className="">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <div className="col-span-2 px-7">
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-5">{title}</h1>
          <p className="tracking-wide mt-7">{description}</p>
        </div>
        <p className="text-lg mt-9 flex mb-4 text-sky-500 items-center ">
          <UserIcon className="h-8 w-8 bg-[#dad8ff] rounded-[50%] mr-2 p-1" />
          By {publisher}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
