import { CustomTable, TableHome } from "components";
import { TransactionStyle } from "./Transaction.style";
import { DatePicker } from "antd";
import MockDate from "mockdate";
import moment from "moment";

const Transaction = () => {
  return (
    <TransactionStyle>
      <div className="head">
        <div className="title">Spending Statistics</div>
        <div className="years">
          <DatePicker />
        </div>
      </div>
      <TableHome />
    </TransactionStyle>
  );
};

export default Transaction;
