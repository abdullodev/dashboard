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
      navigate("/document");
    }
  }, [token]);

  return (
    <ConfigProvider
      theme={{
        // algorithm: darkAlgorithm,
        token: {
          colorWhite: "#ffffff",
          colorPrimary: "#4623E9",
          colorError: "#FF4D4F",
          colorWarning: "#FAAD14",
          colorTextLabel: "#1C1E23",
          colorTextDisabled: "#D0D5DD",
          borderRadius: 8,
        },
        components: {
          Input: {
            controlHeight: 55,
            padding: 10,
            controlPaddingHorizontalSM: 24,
          },
          Button: {
            controlHeight: 36,
          },
          Card: {
            colorBorder: "#fff",
            boxShadow: "none",
          },
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
