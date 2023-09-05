import { ConfigProvider, theme } from "antd";
import Auth from "pages/auth/container/Auth";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PrivetRoutes from "routes/PublicRoutes";

const { darkAlgorithm, compactAlgorithm } = theme;

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // navigate("/");
    }
  }, [token]);

  return (
    <ConfigProvider
      theme={{
        // algorithm: darkAlgorithm,
        token: {
          // Seed Token
          // colorPrimary: "#ffffff",
          // borderRadius: 20,
          // colorBgBase: "#12aaaf",
          // boxShadow: "0 0 10px #eeeeee",
          // colorBgContainerDisabled: "#ffffff",
          // // Alias Token
          // colorBgContainer: "#fffffff",
          // colorBgSpotlight: "red",
        },
      }}
    >
      <Routes>
        <Route path="*" element={<PrivetRoutes />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
