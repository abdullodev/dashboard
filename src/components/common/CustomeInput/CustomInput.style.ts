import { styled } from "styled-components";

export const CustomInputStyle = styled.div`
  label {
    display: inline-block;
    padding: 7px 0;
    font-weight: 700;
    font-size: 14px;

    span {
      color: red;
    }
  }
  input {
    height: 44px;
    font-size: 16px;
    color: #1c1e23;
    border-radius: 12px;
  }

  span:has(input) {
    padding: 0 11px;
    border: 1px solid rgba(102, 112, 133);
  }
`;
