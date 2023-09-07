import { Card, Col, Row, Typography } from "antd";
import { KpiHeadStyle, KpiHeadStyleCard } from "./KpiHead.style";
import UserDefault from "../../assets/user.png";

interface IkpiHeadConst {
  id: number;
  imgUrl: string;
  number: number;
  text: string;
  size: {
    xs: number;
    md: number;
    xl: number;
  };
}

const kpiHeadConst: IkpiHeadConst[] = [
  {
    id: 1,
    imgUrl: UserDefault,
    number: 8,
    text: "Ходимлар сони штат бўйича",
    size: {
      xs: 24,
      md: 8,
      xl: 7,
    },
  },
  {
    id: 2,
    imgUrl: UserDefault,
    number: 0,
    text: "Вакант",
    size: {
      xs: 24,
      md: 8,
      xl: 5,
    },
  },
  {
    id: 3,
    imgUrl: UserDefault,
    number: 8,
    text: "Рўйхат бўйича",
    size: {
      xs: 24,
      md: 8,
      xl: 5,
    },
  },
  {
    id: 4,
    imgUrl: UserDefault,
    number: 1,
    text: "Меҳнат таътилида",
    size: {
      xs: 24,
      md: 8,
      xl: 6,
    },
  },
  {
    id: 5,
    imgUrl: UserDefault,
    number: 0,
    text: "Сабабли",
    size: {
      xs: 24,
      md: 8,
      xl: 5,
    },
  },
  {
    id: 6,
    imgUrl: UserDefault,
    number: 0,
    text: "Сабабсиз",
    size: {
      xs: 24,
      md: 8,
      xl: 5,
    },
  },
];

const KpiHead = () => {
  return (
    <Row gutter={[16, 16]}>
      {kpiHeadConst.map((kpi) => (
        <Col xs={kpi.size.xs} md={kpi.size.md} xl={kpi.size.xl} key={kpi.id}>
          <KpiHeadStyleCard>
            <KpiHeadStyle size={20}>
              <div className="userImg">
                <img src={kpi.imgUrl} alt="default user" />
              </div>
              <div className="userInfo">
                <Typography.Title>{kpi.number}</Typography.Title>
                <Typography.Text>{kpi.text}</Typography.Text>
              </div>
            </KpiHeadStyle>
          </KpiHeadStyleCard>
        </Col>
      ))}
    </Row>
  );
};

export default KpiHead;
