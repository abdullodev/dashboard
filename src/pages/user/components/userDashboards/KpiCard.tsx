import { Card, Space, Typography } from "antd";
import React from "react";
import { KpiStyle } from "./UserDashboard.style";

import ArrowUp from "../../../documents/assets/ArrowUp";

interface IKpiCard {
  value?: {
    number: number;
    valueType: string;
  };
}
const KpiCard: React.FC<IKpiCard> = ({ value }) => {
  return (
    <KpiStyle>
      <Space style={{ width: "100%" }} direction="vertical">
        <div className="head">
          <Typography style={{ color: "#1A202C", fontSize: "16px" }}>
            KPI кўрсаткичи
          </Typography>
          <div className="icon">
            <ArrowUp />
          </div>
        </div>
        <Typography.Title>
          {value?.number}{" "}
          <span style={{ fontSize: "16px", color: "#90A3BF" }}>
            {value?.valueType}
          </span>
        </Typography.Title>
        <Typography>
          <span style={{ fontSize: "16px", color: "#7FB519" }}>20%</span> ўтган
          ойга нисбатан
        </Typography>
      </Space>
    </KpiStyle>
  );
};

export default KpiCard;
