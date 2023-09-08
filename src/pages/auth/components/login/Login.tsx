import { Button, Input } from "antd";
import { LoginStyled } from "./Login.style";
import { useNavigate } from "react-router-dom";
import { CustomInput, CustomPassword } from "components";

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
        <CustomInput
          name="login"
          label={"Login"}
          props={{ placeholder: "Login", defaultValue: "abdullo_me" }}
          rules={{ message: "Must be fill th field", value: true }}
        />
        <CustomPassword
          name="password"
          label="Password"
          rules={{ message: "Length must be 6 characters", value: true }}
          props={{ placeholder: "Password", defaultValue: "abdullo" }}
          icon={<></>}
        />
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
