import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const YearFilter = () => {
  const defaultYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(defaultYear);

  return (
    <div className="years">
      <LeftOutlined
        className="icon_date"
        onClick={() => setYear((prev) => prev - 1)}
      />
      <span>{year}</span>
      <RightOutlined
        className="icon_date"
        onClick={() => setYear((prev) => Math.min(prev + 1, defaultYear))}
      />
    </div>
  );
};

export default YearFilter;
