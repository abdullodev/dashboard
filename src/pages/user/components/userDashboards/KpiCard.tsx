import { Card, Space, Typography } from "antd";
import React from "react";
import { KpiStyle } from "./UserDashboard.style";

import ArrowUp from "../../../documents/assets/ArrowUp";

const KpiCard = () => {
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
          73 <span style={{ fontSize: "16px", color: "#90A3BF" }}>балл</span>
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
