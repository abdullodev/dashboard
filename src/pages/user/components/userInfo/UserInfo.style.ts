import { Card } from "antd";
import { styled } from "styled-components";

export const UserInfoStyle = styled("div")`
  width: 100%;
  border: none;
  padding: 0 !important;
  margin: 0 !important;
  .u-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 10px;

    &:nth-child(odd) {
      background-color: #f9fafb;
      border-radius: 8px;
    }
  }
`;
