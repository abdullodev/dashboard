import React from "react";
import { IncomeExpenseStyle } from "./IncomeExpense.style";
import { Divider } from "antd";
import ArrowUp from "../assets/ArrowUp";
import ArrowDown from "../assets/ArrowDown";

const IncomeExpense = () => {
  return (
    <IncomeExpenseStyle>
      <div className="box">
        <div className="box_head">
          <div className="title">Total Income</div>
          <div className="icon">
            <ArrowUp />
          </div>
        </div>
        <div className="sum">
          <h2>
            $50,530.00 <span>( USD )</span>
          </h2>
          <p>
            <span className="income">20%</span> increase compared to last week
          </p>
        </div>
      </div>

      <div className="diveder_box">
        <Divider type="vertical" style={{ height: "100%" }} />
      </div>
      <div className="box">
        <div className="box_head">
          <div className="title">Total Expence</div>
          <div className="icon">
            <ArrowDown />
          </div>
        </div>
        <div className="sum">
          <h2>
            $19,760.00 <span>( USD )</span>
          </h2>
          <p>
            <span className="expense">10%</span> increase compared to last week
          </p>
        </div>
      </div>
    </IncomeExpenseStyle>
  );
};

export default IncomeExpense;
