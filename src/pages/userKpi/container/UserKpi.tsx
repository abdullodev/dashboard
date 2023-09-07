import { Col } from "antd";
import KpiCard from "pages/user/components/userDashboards/KpiCard";
import KpiHead from "../components/kpiHead/KpiHead";
import EmployeInfo from "../components/userKpiInfos/EmployeInfo";
import { UserKpiStyle } from "./UserKpi.style";
import ResultDashboard from "pages/user/components/userDashboards/ResultDashboard";
import KpiDashboard from "./../../user/components/userDashboards/KpiDashboard";
import { CustomTable } from "components";

const UserKpi = () => {
  return (
    <UserKpiStyle gutter={[16, 16]}>
      <Col xs={{ span: 24, order: 1 }} lg={24}>
        <KpiHead />
      </Col>
      <Col
        xs={{ span: 24, order: 4 }}
        md={{ span: 12, order: 1 }}
        lg={{ span: 15, order: 2 }}
      >
        <EmployeInfo />
      </Col>
      <Col
        xs={{ span: 24, order: 2 }}
        md={{ span: 12, order: 2 }}
        lg={{ span: 8, order: 3 }}
      >
        <KpiCard value={{ number: 73, valueType: "%" }} />
      </Col>
      <Col
        xs={{ span: 24, order: 5 }}
        md={{ span: 24, order: 3 }}
        lg={{ span: 16, order: 4 }}
      >
        <ResultDashboard />
      </Col>
      <Col
        xs={{ span: 24, order: 3 }}
        md={{ span: 24, order: 4 }}
        lg={{ span: 8, order: 5 }}
      >
        <KpiDashboard />
      </Col>
      <Col
        xs={{ span: 24, order: 6 }}
        md={{ span: 12, order: 5 }}
        lg={{ span: 24, order: 6 }}
      >
        <CustomTable />
      </Col>
    </UserKpiStyle>
  );
};

export default UserKpi;
