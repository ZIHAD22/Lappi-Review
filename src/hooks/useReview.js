import axios from "axios";
import React, { useEffect, useState } from "react";

const useReview = (short) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("reviewData.json").then((res) => {
      if (short) {
        let shortRev = [];
        const RevLength = Math.ceil(res.data.length / 2);
        for (let i = 0; i < RevLength; i++) {
          shortRev.push(res.data[i]);
        }
        setReviews(shortRev);
      } else {
        setReviews(res.data);
      }
    });
  }, []);

  return [reviews, setReviews];
};

export default useReview;
