import { styled } from "styled-components";

export const CategoryStyle = styled.div`
  width: 100%;
  border-radius: 10px;
  height: calc(100% - 0);
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
  .pie_chart {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .center_title {
      position: absolute;
      p {
        font-size: #98a2b3;
        font-size: 14px;
      }
      h2 {
        font-size: 24px;
        font-weight: 700;
        color: #1c1e23;
      }
    }
  }

  .info_content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    .info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        .ant-badge-status-dot {
          transform: scale(1.7);
        }
        span {
          color: #98a2b3;
          font-size: 12px;
          font-size: 600;
          margin-left: 10px;
        }
      }
      h2 {
        color: #1c1e23;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 990px) {
    .picard {
      display: flex;
    }
  }
  @media screen and (max-width: 660px) {
    .picard {
      flex-direction: column;
    }
  }
`;
