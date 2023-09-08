import { styled } from "styled-components";

export const CustomSearchStyle = styled.div`
  input {
    height: 44px;
  }
  span:has(input) {
    padding: 0 12px !important;
  }
`;
