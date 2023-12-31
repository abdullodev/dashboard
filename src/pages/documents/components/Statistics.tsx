import { Typography } from "antd";
import { YearFilter } from "components";
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

const data = [
  {
    name: "Jan",
    dataKey: 2400,
    key1: 7200,
  },
  {
    name: "Feb",
    uv: 3000,
    dataKey: 1398,
    key1: 9400,
  },
  {
    name: "Mar",
    dataKey: 9800,
    key1: 6800,
  },
  {
    name: "Apr",
    dataKey: 3908,
    key1: 5000,
  },
  {
    name: "May",
    dataKey: 4800,
    key1: 1200,
  },
  {
    name: "Jun",
    dataKey: 3800,
    key1: 6000,
  },
  {
    name: "Jul",
    dataKey: 4300,
    key1: 7800,
  },
  {
    name: "Avg",
    dataKey: 4300,
    key1: 8000,
  },
  {
    name: "Sep",
    dataKey: 4300,
    key1: 9000,
  },
  {
    name: "Oct",
    dataKey: 4300,
    key1: 8500,
  },
  {
    name: "Nov",
    dataKey: 4300,
    key1: 5900,
  },
  {
    name: "Dec",
    dataKey: 4300,
    key1: 6500,
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
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis
              yAxisId="left"
              axisLine={false}
              style={{
                fontSize: "14px",
                color: "#667085",
                fontWeight: 600,
              }}
              orientation="left"
              stroke="#667085"
              tickFormatter={(value) =>
                `$ ${value / 1000 > 1 ? `${Math.floor(value / 1000)}k` : value}`
              }
            />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="key1"
              fill="#4623E9"
              barSize={12}
              radius={[12, 12, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </StatisticsStyle>
  );
};

export default Statistics;
