import { Col, Row, Space } from "antd";
import { DocumentStyle } from "./Document.sgtyle";
import Statistics from "../components/Statistics";
import Balance from "../components/Balance";
import Category from "../components/Category";
import Transaction from "../components/Transaction";
import IncomeExpense from "../components/IncomeExpense";

const Documents = () => {
  return (
    <DocumentStyle>
      <Row gutter={[16, 16]}>
        <Col sm={12} xs={24} md={16}>
          <Space
            direction="vertical"
            style={{ width: "100%", height: "100%" }}
            size={16}
          >
            <Statistics />
            <Transaction />
            <IncomeExpense />
          </Space>
        </Col>
        <Col sm={12} xs={24} md={8}>
          <Space
            direction="vertical"
            style={{ width: "100%", height: "100%" }}
            size={16}
          >
            <Balance />
            <Category />
          </Space>
        </Col>
      </Row>
    </DocumentStyle>
  );
};

export default Documents;
