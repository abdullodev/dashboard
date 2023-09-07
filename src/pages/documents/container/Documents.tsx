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
        <Col
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          lg={{ span: 12, order: 1 }}
          xl={{ span: 16, order: 1 }}
        >
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
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          lg={{ span: 12, order: 2 }}
          xl={{ span: 8, order: 2 }}
        >
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
