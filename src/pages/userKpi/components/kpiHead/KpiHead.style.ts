import { Card, Space } from "antd";
import { styled } from "styled-components";

export const KpiHeadStyleCard = styled(Card)`
  width: 100%;
  border-radius: 16px;
  gap: 0;
  padding: 10px 16px;
  .ant-card-body {
    padding: 0 !important;
  }
`;

export const KpiHeadStyle = styled(Space)`
  width: 100%;
  .userImg {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-color: #f7f5fd;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
