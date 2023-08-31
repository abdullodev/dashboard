import { styled } from "styled-components";

export const LoginStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  width: 380px;

  h2 {
    font-weight: 700;
    font-size: 26px;
    color: #353740;
  }

  .login {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p {
      label {
        display: inline-block;
        padding: 7px 0;
        font-weight: 700;
        font-size: 14px;
      }
      input {
        height: 44px;
        font-size: 16px;
        border: 1px solid rgba(102, 112, 133);
        color: #1c1e23;
      }
      .password-input {
        padding: 0;
        padding: 0 15px;
        border: 1px solid rgba(102, 112, 133);

        input {
          outline: none;
          border: none;
          border-radius: 10px;
        }
      }
      span {
        font-size: 15px;
        font-weight: 600;
        color: #353740;
      }
    }
    .login-btn {
      height: 44px;
      font-size: 16px;
      font-weight: 700;
      background-color: #4623e9;
      color: #ffffff;
    }
  }
`;
