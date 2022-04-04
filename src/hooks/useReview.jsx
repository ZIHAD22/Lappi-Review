import axios from "axios";
import React, { useEffect, useState } from "react";

const useReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios.get("reviewData.json").then((res) => setReview(res.data));
  }, []);

  return [review, setReview];
};

export default useReview;
