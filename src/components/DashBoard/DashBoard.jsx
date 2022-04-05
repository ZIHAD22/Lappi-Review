import React from "react";
import useChartData from "../../hooks/useChartData";
import AreaChartItem from "../ChartItem/AreaChartItem";
import LineChartItem from "../ChartItem/LineChartItem";

const DashBoard = () => {
  const [data, setData] = useChartData();
  return (
    <div className="h-screen my-auto">
      <div className="grid grid-cols-2 mt-11 place-items-center">
        <LineChartItem data={data} />
        <AreaChartItem data={data} />
      </div>
    </div>
  );
};

export default DashBoard;
