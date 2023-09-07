import { Badge, DatePicker } from "antd";
import { CategoryStyle } from "pages/documents/components/Category.style";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 520 },
  { name: "Group B", value: 520 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 250 },
];

const COLORS = [
  {
    color: "#EB7CA6",
    text: "1-вазифа",
    price: "78",
  },
  {
    color: "#5CAFFC",
    text: "3-вазифа",
    price: "131",
  },
  {
    color: "#FFACC8",
    text: "2-вазифа",
    price: "15",
  },

  {
    color: "#7C5CFC",
    text: "4-вазифа",
    price: "174",
  },
];

const KpiDashboard = () => {
  return (
    <CategoryStyle>
      <div className="head">
        <div className="title">Spend by category</div>
        <div className="threeDot">
          <DatePicker />
        </div>
      </div>
      <div className="picard">
        <div className="pie_chart">
          <PieChart width={300} height={300}>
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
            <p>Жами</p>
            <h2>74,6</h2>
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

export default KpiDashboard;
