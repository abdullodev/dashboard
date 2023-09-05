import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { StatisticsStyle } from "./Statistics.style";
import { useState } from "react";
import { Button, Typography } from "antd";
import { YearFilter } from "components";

const data = [
  {
    name: "Jan",
    dataKey: 2400,
    amt: "$500",
  },
  {
    name: "Feb",
    uv: 3000,
    dataKey: 1398,
    amt: "$1000",
  },
  {
    name: "Mar",
    dataKey: 9800,
    amt: "$1000",
  },
  {
    name: "Apr",
    dataKey: 3908,
    amt: "$1000",
  },
  {
    name: "May",
    dataKey: 4800,
    amt: "$1000",
  },
  {
    name: "Jun",
    dataKey: 3800,
    amt: "$1000",
  },
  {
    name: "Jul",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Avg",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Sep",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Oct",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Nov",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Dec",
    dataKey: 4300,
    amt: "$1000",
  },
];

const Statistics = () => {
  return (
    <StatisticsStyle>
      <div className="head">
        <Typography style={{ fontSize: "16px" }}>
          Spending Statistics
        </Typography>
        <YearFilter />
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              yAxisId="left"
              axisLine={false}
              orientation="left"
              stroke="#4623E9"
            />
            {/* <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" /> */}
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="dataKey"
              fill="#4623E9"
              barSize={12}
              radius={[12, 12, 0, 0]}
            />
            {/* <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </StatisticsStyle>
  );
};

export default Statistics;
