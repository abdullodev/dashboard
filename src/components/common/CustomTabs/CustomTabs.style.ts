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
      background-color: #f2f4f7;
      color: #667085;
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
