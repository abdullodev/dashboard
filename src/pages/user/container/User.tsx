import { Card, Col, Row, Space, Typography } from "antd";
import UserInfo from "../components/userInfo/UserInfo";
import KpiCard from "../components/userDashboards/KpiCard";

const User = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={16}>
        <UserInfo />
      </Col>
      <Col xs={24} md={8}>
        <KpiCard />
      </Col>
      <Col xs={24} md={16}>
        <Typography>Dashboard 1</Typography>
      </Col>
      <Col xs={24} md={8}>
        <Typography>Dashboard 2</Typography>
      </Col>{" "}
      <Col xs={24} md={16}>
        <Typography>Dashboard 3</Typography>
      </Col>
    </Row>
  );
};

export default User;
