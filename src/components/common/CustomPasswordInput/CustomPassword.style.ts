import { styled } from "styled-components";

export const CustomPasswordStyle = styled.div`
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
    font-size: 16px;
    border: 1px solid rgba(102, 112, 133);
    color: #1c1e23;
  }
  .ant-input-password {
    height: 44px;
    padding: 0;
    padding: 0 15px;
    border: 1px solid rgba(102, 112, 133);

    input {
      outline: none;
      border: none;
      border-radius: 10px;
    }
  }
  .error {
    color: red;
    font-size: 14px;
    font-weight: 500;
    padding: 4px 0;
  }
`;
