import React from "react";
import { BalanceStyle } from "./Balance.style";
import ThreeDot from "../assets/ThreeDot";
import { Button } from "antd";
import MoneyRecive from "../assets/MoneyRecive";
import MoneySend from "../assets/MoneySend";

const Balance = () => {
  return (
    <BalanceStyle>
      <div className="head">
        <div className="title">Your balance</div>
        <div className="threeDot">
          <ThreeDot />
        </div>
      </div>
      <div className="sum">
        <h2>
          $120,435.00 <span>(USD)</span>
        </h2>
        <p>From Jan 01, 2022 to Jan 31, 2022</p>
      </div>
      <div className="btns">
        <Button icon={<MoneyRecive />}> Top Up</Button>
        <Button icon={<MoneySend />}> Transfer</Button>
      </div>
    </BalanceStyle>
  );
};

export default Balance;
