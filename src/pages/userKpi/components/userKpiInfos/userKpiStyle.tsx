import { Card } from "antd";
import { styled } from "styled-components";

export const EpmloyeeStyled = styled(Card)`
  padding: 20px;
  .ant-card-body {
    display: flex;
    justify-content: space-between;
    padding: 0 !important;
    .info_boxes {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .inf_2 {
        padding-left: 20px;
      }
      .inf_1 {
        padding-right: 20px;
      }
    }
  }
`;
