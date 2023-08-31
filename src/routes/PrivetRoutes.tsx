import React, { Suspense } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Loader, Sidebar } from "components";
import { SiderbarStyle } from "./PrivetRoutes.style";

const { Header, Footer, Sider, Content } = Layout;

const PrivetRoutes = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Suspense fallback={<Loader />}>
      <Layout style={{ minHeight: "100vh" }}>
        <SiderbarStyle
          width={280}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Sidebar />
        </SiderbarStyle>
        <Layout style={{}}>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content
            style={{ margin: "24px 16px 0", minHeight: "calc(100vh - 60px)" }}
          >
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
              }}
            >
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default PrivetRoutes;
