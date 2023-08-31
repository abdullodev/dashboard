import { Button, Input } from "antd";
import { LoginStyled } from "./Login.style";

interface ILogin {
  setAuth: (auth: "login" | "register") => void;
}
const Login = ({ setAuth }: ILogin) => {
  const submit = () => {
    localStorage.setItem("token", "token");
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
        <Button type="primary" className="login-btn">
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
