import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const LineChartItem = ({ data }) => {
  return (
    <div>
      <h1 className="text-xl text-center mb-4 text-[#8884d8]">
        Month Wise Sell
      </h1>
      <LineChart width={500} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sell"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineChartItem;
