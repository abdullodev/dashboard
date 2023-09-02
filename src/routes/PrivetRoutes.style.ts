import { styled } from "styled-components";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export const SiderbarStyle = styled(Sider)`
  background-color: #ffffff !important;
  height: 100vh !important;
  overflow: auto;
  .ant-layout-sider-zero-width-trigger {
    background-color: #4623e9;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 111;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
