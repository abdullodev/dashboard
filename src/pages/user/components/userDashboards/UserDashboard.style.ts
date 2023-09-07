import { Card } from "antd";
import { styled } from "styled-components";

export const KpiStyle = styled(Card)`
  .head {
    display: flex;
    justify-content: space-between;
    .icon {
      width: 42px;
      height: 42px;
      border: 8px;
      background-color: #f6f7f9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
