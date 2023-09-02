import React, { Suspense, useEffect } from "react";
import { Layout, theme } from "antd";
import { Head, Loader, Sidebar } from "components";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SiderbarStyle } from "./PrivetRoutes.style";
import { ROUTE_LISTS } from "./Routes.constants";

const { Header, Footer, Sider, Content } = Layout;

const ROUTES = () => {
  return (
    <Routes>
      {ROUTE_LISTS.map((route) => (
        <React.Fragment key={route.id}>
          <Route {...route} />
        </React.Fragment>
      ))}
    </Routes>
  );
};

const PrivetRoutes = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token]);

  return (
    <Suspense fallback={<Loader />}>
      <Layout style={{ minHeight: "100vh" }}>
        <SiderbarStyle
          width={280}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Sidebar />
        </SiderbarStyle>
        <Layout style={{ background: "#F6F7F9", padding: "20px" }}>
          <Header style={{ padding: 0, backgroundColor: "inherit" }}>
            <Head />
          </Header>
          <Content style={{ minHeight: "calc(100vh - 70px)" }}>
            <div
              style={{
                position: "relative",
                padding: "10px 0",
                height: "100%",
              }}
            >
              <Suspense fallback={<Loader />}>
                <ROUTES />
              </Suspense>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default PrivetRoutes;
