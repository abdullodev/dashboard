import Auth from "pages/auth/container/Auth";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PrivetRoutes from "routes/PrivetRoutes";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // navigate("/");
    }
  }, [token]);

  return (
    <>
      <Routes>
        <Route path="*" element={<PrivetRoutes />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
