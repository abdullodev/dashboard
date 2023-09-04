import { styled } from "styled-components";

export const BalanceStyle = styled.div`
  height: 349px;
  width: 100%;
  border-radius: 10px;
  padding: 22px 16px;
  background-color: #ffffff;
  box-shadow: 0px 6px 24px 0px #d0d5dd33;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      color: #1c1e23;
      font-size: 16px;
      font-weight: 600;
    }
    .threeDot {
      cursor: pointer;
    }
  }

  .sum {
    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #1c1e23;
      margin-bottom: 18px;

      span {
        color: #d0d5dd;
        font-size: 14px;
        font-weight: 600;
        margin-left: 12px;
      }
    }
    p {
      color: #d0d5dd;
      font-size: 12px;
      font-weight: 600;
    }
  }
  .btns {
    display: flex;
    gap: 25px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    button {
      width: 100%;
      height: 55px;
      background-color: #ffffff;
      border-radius: 10px;
      color: #ffffff;
      color: #1c1e23;
      font-weight: 600;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border: 1px solid #4623e9;

      &:first-child {
        background-color: #4623e9;
        color: #ffffff;
        &:hover {
          color: #d0d5dd;
        }
      }
    }
  }
`;
