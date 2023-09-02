import { styled } from "styled-components";

export const IncomeExpenseStyle = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 160px;
  padding: 22px 16px;
  background-color: #ffffff;
  box-shadow: 0px 6px 24px 0px #d0d5dd33;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  .box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    .box_head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        color: #1c1e23;
        font-size: 16px;
        font-weight: 600;
      }
      .icon {
        width: 42px;
        height: 42px;
        border-radius: 8px;
        background-color: #f2f4f7;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .sum {
      h2 {
        font-size: 32px;
        font-weight: 700;
        color: #1c1e23;
        margin-bottom: 12px;

        span {
          color: #d0d5dd;
          font-size: 14px;
          font-weight: 600;
        }
      }
      p {
        color: #d0d5dd;
        font-size: 12px;
        span {
          color: #14d934;
        }
        .income {
          color: #14d934;
        }
        .expense {
          color: #ff4d4f;
        }
      }
    }
  }
  .ant-divider {
    width: 5px !important;
    height: 100%;
  }
`;
