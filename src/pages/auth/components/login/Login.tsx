import { Button, Input } from "antd";
import { LoginStyled } from "./Login.style";
import { useNavigate } from "react-router-dom";

interface ILogin {
  setAuth: (auth: "login" | "register") => void;
}
const Login = ({ setAuth }: ILogin) => {
  const navigate = useNavigate();
  const submit = () => {
    localStorage.setItem("token", "token");
    navigate("/document");
  };
  return (
    <LoginStyled onSubmit={submit}>
      <h2>Tizimga kirish</h2>
      <div className="login">
        <p>
          <label htmlFor="login">Login</label>
          <Input placeholder="Login" id="login" />
        </p>
        <p>
          <label htmlFor="parol">Password</label>
          <Input.Password placeholder="Password" className="password-input" />
        </p>
        <Button htmlType="submit" type="primary" className="login-btn">
          Kirish
        </Button>
        <footer>
          <span>Dont have an account?</span>
          <Button type="link" onClick={() => setAuth("register")}>
            Register
          </Button>
        </footer>
      </div>
    </LoginStyled>
  );
};

export default Login;
