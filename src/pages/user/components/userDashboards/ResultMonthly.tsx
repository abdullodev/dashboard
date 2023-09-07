import { Tooltip, Typography } from "antd";
import { YearFilter } from "components";
import { StatisticsStyle } from "pages/documents/components/Statistics.style";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    dataKey: 69,
    key1: 55,
  },
  {
    name: "Feb",
    uv: 3000,
    dataKey: 65,
    key1: 55,
  },
  {
    name: "Mar",
    dataKey: 52,
    key1: 55,
  },
  {
    name: "Apr",
    dataKey: 45,
    key1: 55,
  },
  {
    name: "May",
    dataKey: 62,
    key1: 55,
  },
  {
    name: "Jun",
    dataKey: 52,
    key1: 55,
  },
  {
    name: "Jul",
    dataKey: 23,
    key1: 55,
  },
  {
    name: "Avg",
    dataKey: 32,
    key1: 55,
  },
  {
    name: "Sep",
    dataKey: 18,
    key1: 55,
  },
  {
    name: "Oct",
    dataKey: 45,
    key1: 55,
  },
  {
    name: "Nov",
    dataKey: 44,
    key1: 55,
  },
  {
    name: "Dec",
    dataKey: 51,
    key1: 55,
  },
];

const ResultMonthly = () => {
  return (
    <StatisticsStyle>
      <div className="head">
        <Typography style={{ fontSize: "16px" }}>
          Иш натижалари самарадорлиги (ойлар кесимида)
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
            <XAxis
              dataKey="name"
              style={{
                color: "#101828",
                fontWeight: "700",
                fontSize: "12px",
              }}
            />
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
            />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="key1"
              fill="#725CFF"
              barSize={12}
              radius={[12, 12, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </StatisticsStyle>
  );
};

export default ResultMonthly;
