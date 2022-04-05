import React from "react";
import useChartData from "../../hooks/useChartData";
import AreaChartItem from "../ChartItem/AreaChartItem";
import LineChartItem from "../ChartItem/LineChartItem";

const DashBoard = () => {
  const [data, setData] = useChartData();
  return (
    <div className="lg:h-screen my-auto overflow-hidden sm:m-10 sm:pb-10">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-11 place-items-center">
        <LineChartItem data={data} />
        <AreaChartItem data={data} />
      </div>
    </div>
  );
};

export default DashBoard;
