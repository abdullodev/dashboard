import { styled } from "styled-components";

export const SidebarStyled = styled.div`
  padding: 20px 10px;
  height: 100%;

  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    gap: 15px;
    h2 {
      font-size: 24px;
      font-weight: 700;
    }
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 60px);
    .main_top {
      width: 100%;
      padding-top: 20px;
    }
    .main_bottom {
      width: 100%;
    }

    ul {
      border: none !important;
      li {
        gap: 15px;
        font-size: 16px;
        font-size: 400;
        border: 0 !important;
        &:hover {
          background-color: #f7f5fd !important;
          color: #4623e9 !important;
        }
        &.ant-menu-item-selected {
          background-color: #f7f5fd !important;
          color: #4623e9 !important;
        }
      }
    }

    .sidebar_title {
      color: #98a2b3;
      font-size: 13px;
      padding-left: 30px;
      padding-bottom: 10px;
    }
  }
`;
