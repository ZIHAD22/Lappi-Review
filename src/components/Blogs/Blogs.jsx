import React from "react";
import BlogItem from "../BlogItem/BlogItem";
const blogsData = [
  {
    id: 1,
    title: "What is Context Api",
    description: `একটি সাধারণ রিঅ্যাক্ট অ্যাপ্লিকেশনে data উপর থেকে নিচের দিকে
      প্রবাহিত হয়। তার জন্য আমাদের কে manually data parent component থেকে
      child component এর কাছে পাঠাতে হয়। যা অনেক কষ্টকর। আর এই জাইগাই
      আমাদের Context Api সাহায্য করে। Context Api manually data parent
      component থেকে child component এর কাছে props হিসেবে না পাঠিয়ে
      component tree ব্যবহার করে data সরাসরি ওই component এর কাছে সরবরাহ
      করার একটি উপায়`,
    publisher: "MD.ZIHAD",
    img: "https://www.loginradius.com/blog/static/157af7ff069ab273224b4718433d9790/03979/title-image.png",
  },
  {
    id: 1,
    title: "What is Context Api",
    description: `একটি সাধারণ রিঅ্যাক্ট অ্যাপ্লিকেশনে data উপর থেকে নিচের দিকে
      প্রবাহিত হয়। তার জন্য আমাদের কে manually data parent component থেকে
      child component এর কাছে পাঠাতে হয়। যা অনেক কষ্টকর। আর এই জাইগাই
      আমাদের Context Api সাহায্য করে। Context Api manually data parent
      component থেকে child component এর কাছে props হিসেবে না পাঠিয়ে
      component tree ব্যবহার করে data সরাসরি ওই component এর কাছে সরবরাহ
      করার একটি উপায়`,
    publisher: "MD.ZIHAD",
    img: "https://www.loginradius.com/blog/static/157af7ff069ab273224b4718433d9790/03979/title-image.png",
  },
  {
    id: 1,
    title: "What is Context Api",
    description: `একটি সাধারণ রিঅ্যাক্ট অ্যাপ্লিকেশনে data উপর থেকে নিচের দিকে
      প্রবাহিত হয়। তার জন্য আমাদের কে manually data parent component থেকে
      child component এর কাছে পাঠাতে হয়। যা অনেক কষ্টকর। আর এই জাইগাই
      আমাদের Context Api সাহায্য করে। Context Api manually data parent
      component থেকে child component এর কাছে props হিসেবে না পাঠিয়ে
      component tree ব্যবহার করে data সরাসরি ওই component এর কাছে সরবরাহ
      করার একটি উপায়`,
    publisher: "MD.ZIHAD",
    img: "https://www.loginradius.com/blog/static/157af7ff069ab273224b4718433d9790/03979/title-image.png",
  },
];
const Blogs = () => {
  return (
    <div>
      {blogsData.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
