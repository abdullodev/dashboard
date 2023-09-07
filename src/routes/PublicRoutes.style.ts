import { styled } from "styled-components";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export const SiderbarStyle = styled(Sider)`
  background-color: #ffffff !important;
  height: 100vh !important;

  .ant-layout-sider-zero-width-trigger {
    background-color: #4623e9;
  }
`;

export const ContentStyle = styled.div`
  height: calc(100vh - 80px);
  box-sizing: border-box;
  padding: 10px 20px 20px 20px;
  overflow: auto;
  position: relative;

  /* &::-webkit-scrollbar {
    display: none;
  }
  &:hover {
    &::-webkit-scrollbar {
      display: block;
    }
  } */
`;
