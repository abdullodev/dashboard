import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrivetRoutes from "routes/PrivetRoutes";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token]);

  return (
    <div className="App">
      <PrivetRoutes />
    </div>
  );
}

export default App;
