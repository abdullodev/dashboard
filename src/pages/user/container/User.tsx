import { Col, Row, Space } from "antd";
import KpiCard from "../components/userDashboards/KpiCard";
import KpiDashboard from "../components/userDashboards/KpiDashboard";
import ResultDashboard from "../components/userDashboards/ResultDashboard";
import UserInfo from "../components/userInfo/UserInfo";
import ResultMonthly from "../components/userDashboards/ResultMonthly";

const User = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col
        xs={{ span: 24, order: 2 }}
        sm={{ span: 24, order: 2 }}
        lg={{ span: 12, order: 1 }}
        xl={{ span: 16, order: 1 }}
      >
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <UserInfo />
          <ResultDashboard />
          <ResultMonthly />
        </Space>
      </Col>
      <Col
        xs={{ span: 24, order: 1 }}
        sm={{ span: 24, order: 1 }}
        lg={{ span: 12, order: 2 }}
        xl={{ span: 8, order: 2 }}
      >
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <KpiCard value={{ number: 73, valueType: "балл" }} />
          <KpiDashboard />
        </Space>
      </Col>
    </Row>
  );
};

export default User;
