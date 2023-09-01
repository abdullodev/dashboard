import { styled } from "styled-components";

export const HeaderStyle = styled.div`
  .header_box {
    height: 56px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #ffffff;
    box-shadow: 0px 6px 24px 0px #d0d5dd33;

    .breadcramb_box {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      ol {
        li {
          line-height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            color: #98a2b3;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
              background-color: inherit;
            }
          }
        }
      }
    }

    .header_right {
      .ant-input-affix-wrapper {
        border: 1px solid #d0d5dd;
        border-radius: 12px;
        gap: 5px;
      }
      .notif {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .user_profile {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 56px;
        gap: 15px;
        p {
          transition: all 0.3s ease;
          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
        }
        .img {
          border-radius: 6px;
          width: 36px;
          height: 36px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;
