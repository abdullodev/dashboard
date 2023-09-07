import { Card, Divider, Typography } from "antd";
import React from "react";
import { EpmloyeeStyled } from "./userKpiStyle";

const employeeData = [
  {
    info: "Ходимлар сони штат бўйича",
    value: 8,
  },
  {
    info: "Вакант",
    value: 0,
  },
  {
    info: "Рўйхат бўйича",
    value: 8,
  },
  {
    info: "Меҳнат таътилида",
    value: 1,
  },
  {
    info: "Сабабли",
    value: 0,
  },
  {
    info: "Сабабли",
    value: 0,
  },
  {
    info: "Кунлик хизматга чиқиш меъёри",
    value: 8,
  },
  {
    info: "Кунлик хизматга чиққан ходимлар",
    value: 8,
  },
  {
    info: "Патруллик йўналишида хизмат олиб борган ходимлар",
    value: 8,
  },
];
const EmployeInfo = () => {
  return (
    <EpmloyeeStyled>
      <div className="info_boxes ">
        {employeeData.slice(0, 6).map((employee, index) => (
          <div className="info inf_1" key={index}>
            <Typography
              style={{ fontSize: "16px", fontWeight: "500", color: "#101828" }}
            >
              {employee.info}:
            </Typography>
            <Typography
              style={{ fontSize: "16px", fontWeight: "500", color: "#667085" }}
            >
              {employee.value}
            </Typography>
          </div>
        ))}
      </div>
      <div className="diveder_box">
        <Divider
          type="vertical"
          style={{ height: "100%", backgroundColor: "#F2F4F7" }}
        />
      </div>
      <div className="info_boxes ">
        {employeeData.slice(6).map((employee, index) => (
          <div className="info inf_2" key={index}>
            <Typography
              style={{ fontSize: "16px", fontWeight: "500", color: "#101828" }}
            >
              {employee.info}:
            </Typography>
            <Typography
              style={{ fontSize: "16px", fontWeight: "500", color: "#667085" }}
            >
              {employee.value}
            </Typography>
          </div>
        ))}
      </div>
    </EpmloyeeStyled>
  );
};

export default EmployeInfo;
