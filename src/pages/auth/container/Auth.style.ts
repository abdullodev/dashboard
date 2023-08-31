import { styled } from "styled-components";

export const AuthStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100vh;
  .auth-left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 80px;
    gap: 35px;
    background-color: #4623e9;
    img {
      width: 320px;
    }
    p {
      text-align: center;
      color: #ffffff;
      font-size: 18px;
      font-weight: 500;
      line-height: 35px;
    }
  }
  .auth-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1000px) {
    .auth-left {
      padding: 0 20px;

      img {
        width: 280px;
      }
      p {
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    .auth-left {
      display: none;
    }
  }
`;
