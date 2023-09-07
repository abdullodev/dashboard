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
    name: "I-чорак",
    dataKey: 70,
    key4: "20",
    key3: "47",
    key2: "67",
    key1: "51",
  },
  {
    name: "II-чорак",
    dataKey: 50,
    key4: "32",
    key3: "13",
    key2: "47",
    key1: "14",
  },
  {
    name: "III-чорак",
    dataKey: 45,
    key4: "14",
    key3: "52",
    key2: "60",
    key1: "23",
  },
  {
    name: "IV-чорак",
    dataKey: 30,
    key4: "60",
    key3: "40",
    key2: "65",
    key1: "55",
  },
];

const ResultDashboard = () => {
  return (
    <StatisticsStyle>
      <div className="head">
        <Typography style={{ fontSize: "16px" }}>
          Иш натижалари самарадорлиги (чорак кесимида)
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
              bottom: 20,
            }}
          >
            <CartesianGrid />
            <XAxis
              dataKey="name"
              style={{
                color: "rgba(20, 23, 31, 0.6)",
                fontWeight: "600",
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
              fill="#A1A9FE"
              barSize={12}
              radius={[12, 12, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="key2"
              fill="#EB7CA6"
              barSize={12}
              radius={[12, 12, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="key3"
              fill="#725CFF"
              barSize={12}
              radius={[12, 12, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="key4"
              fill="#5CAFFC"
              barSize={12}
              radius={[12, 12, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </StatisticsStyle>
  );
};

export default ResultDashboard;
