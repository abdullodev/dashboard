import { Badge } from "antd";
import { Cell, Pie, PieChart } from "recharts";
import ThreeDot from "../assets/ThreeDot";
import { CategoryStyle } from "./Category.style";

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 250 },
  { name: "Group F", value: 200 },
];

const COLORS = [
  {
    color: "#EB7CA6",
    text: "Employees Salary",
    price: "$8.000.00",
  },
  {
    color: "#FFACC8",
    text: "Material Supplies",
    price: "$2.130.00",
  },
  {
    color: "#CC6FF8",
    text: "Company tax",
    price: "$1.510.00",
  },
  {
    color: "#7C5CFC",
    text: "Maintenance system",
    price: "$2.245.00",
  },
  {
    color: "#5CAFFC",
    text: "Development System",
    price: "$4.385.00",
  },
  {
    color: "#A1A9FE",
    text: "Production Tools ",
    price: "$1.000.00",
  },
];

const Category = () => {
  const onPieEnter = () => {
    console.log("hoverd");
  };

  return (
    <CategoryStyle>
      <div className="head">
        <div className="title">Spend by category</div>
        <div className="threeDot">
          <ThreeDot />
        </div>
      </div>
      <div className="picard">
        <div className="pie_chart">
          <PieChart width={300} height={300} onMouseEnter={onPieEnter}>
            <Pie
              data={data}
              innerRadius={90}
              outerRadius={110}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              radius={12}
              cornerRadius={5}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length].color}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="center_title">
            <p>Overall Spending</p>
            <h2>$19,760,00</h2>
          </div>
        </div>
        <div className="info_content">
          {COLORS.map((color) => (
            <div className="info" key={color.color}>
              <p>
                <Badge key={color.color} color={color.color} />
                <span>{color.text}</span>
              </p>
              <h3>{color.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </CategoryStyle>
  );
};

export default Category;
