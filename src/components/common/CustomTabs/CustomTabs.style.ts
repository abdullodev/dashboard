import { Space } from "antd";
import { styled } from "styled-components";

export const CustomTabStyle = styled(Space)`
  button {
    font-weight: 600;
    &:hover {
      border-color: #4623e9 !important;
      color: #4623e9 !important;
    }
    .num {
      padding: 3px 5px;
      border-radius: 50%;
      font-size: 12px;
      font-weight: 500;
      background-color: #f2f4f7;
      color: #667085;
      width: 24px;
      height: 24px;
      border-radius: 12px;
    }
    &.active {
      border-color: #4623e9 !important;
      color: #4623e9 !important;
      .num {
        background-color: #4623e9;
        color: #ffffff;
      }
    }
  }
`;
