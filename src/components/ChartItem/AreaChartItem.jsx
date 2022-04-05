import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartItem = ({ data }) => {
  return (
    <div>
      <h1 className="text-xl text-center mb-4 text-[#40c5c5]">
        Investment Vs Revenue
      </h1>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#40c5c5"
          fill="#40c5c5"
        />
      </AreaChart>
    </div>
  );
};

export default AreaChartItem;
