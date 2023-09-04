import { styled } from "styled-components";

export const StatisticsStyle = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 6px 24px 0px #d0d5dd33;
  width: 100%;
  height: 420px;
  border-radius: 10px;
  padding: 22px 16px;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 16px;
      font-weight: 600;
      color: #1c1e23;
    }
    .years {
      width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon_date {
        background-color: #f2f4f7;
        padding: 5px;
        cursor: pointer;
        border-radius: 6px;
        color: #1c1e23;

        span {
          font-size: 15px;
          font-weight: 600;
          color: #1c1e23;
        }
      }
    }
  }

  .chart {
    width: 100%;
    height: 100%;
    padding-top: 40px;

    .recharts-legend-wrapper {
      display: none;
    }
    .recharts-bar-rectangle {
      path {
        -moz-outline-radius: 12px;
      }
    }
  }
`;
