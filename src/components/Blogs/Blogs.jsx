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
    id: 2,
    title: "What is Semantic Tag",
    description: `Semantic HTML elements গুলি হল যেগুলি মানুষের এবং মেশিন-পাঠযোগ্য উপায়ে তাদের অর্থ স্পষ্টভাবে বর্ণনা করে <header>, <footer> এবং <article>-এর মতো উপাদানগুলিকে semantic tag বলা হয় কারণ তারা তারা তাদের উদ্দেশ্য এবং তাদের ভিতরে থাকা বিষয়বস্তুর ধরণকে সঠিকভাবে বর্ণনা করে। এই রকম আরও অনেক semantic tag আসে। কিন্তু তাদের সবার (Semantic Tag) উদ্দেশ্য আমারা ঐ tag এর নাম দেখেই বুঝতে পারি। এবং এই টাকে Semantic Tag বলে `,
    publisher: "MD.ZIHAD",
    img: "https://www.encodedna.com/2014/08/html5-semantics.png",
  },
  {
    id: 3,
    title:
      "What is Deferance Beetwing Inline or Block and Inline-Block Elements",
    description: `Block Element গুলো তাদের পর্যাপ্ততা নির্বিশেষে পুরো জাইগার নেয়। এবং তারা সর্বদা একটি নতুন লাইনে শুরু। তাদের উপরে এবং নীচের মার্জিন থাকে। এটির পাশে অন্য কোন element থাকে না। Inline Element শুধুমাত্র তার যতটুকু জাইগা দরকার তটুকু দখল করে যা এটির জন্য যথেষ্ট এবং এটির পাশে থাকা অন্যান্য element গুলো দের থাকতে দেয় যা ইনলাইন রয়েছে৷ ইনলাইন উপাদানগুলি একটি নতুন লাইন থেকে শুরু হয় না এবং ব্লক উপাদানগুলির মতো শীর্ষ এবং নীচের মার্জিন থাকে না। Inline-block Element inline element গুলির অনুরূপ, শুধু তাদের চারটি দিকে প্যাডিং এবং মার্জিন থাকে।
    `,
    publisher: "MD.ZIHAD",
    img: "https://i.ytimg.com/vi/hgoFi0fCv3w/maxresdefault.jpg",
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
