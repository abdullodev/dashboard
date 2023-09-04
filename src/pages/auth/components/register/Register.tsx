import { Button, Input } from "antd";
import { RegisterStyled } from "./Register.style";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "components";

interface IRegister {
  setAuth: (auth: "login" | "register") => void;
}

const Register = ({ setAuth }: IRegister) => {
  const navigate = useNavigate();

  const submit = () => {
    localStorage.setItem("token", "token");
    navigate("/document");
    console.log("clicked");
  };
  return (
    <RegisterStyled onSubmit={submit}>
      <h2>Tizimga kirish</h2>
      <div className="register">
        <CustomInput name="iiv" props={{ placeholder: "IIV" }} label="IIV" />

        <CustomInput
          name="viib"
          props={{ placeholder: "VIIB Boshqarmasi" }}
          label="VIIB Boshqarmasi"
          rules={{ message: "Must be fill the field", value: true }}
        />

        <p>
          <label htmlFor="tuman-bo'lim">Tuman IIBo'lim</label>
          <Input placeholder="Tuman IIBo'lim" id="tuman-bo'lim" />
        </p>
        <CustomInput
          name="iib"
          props={{ placeholder: "Tuman IIBo'lim" }}
          label="Tuman IIBo'lim"
        />
        <p>
          <label htmlFor="login">Login</label>
          <Input placeholder="Login" id="login" />
        </p>
        <CustomInput
          name="login"
          props={{ placeholder: "Login" }}
          label="Login"
          rules={{ message: "Must be 6 characters", value: true }}
        />
        <CustomInput
          name="password"
          props={{ placeholder: "Password" }}
          label="Password"
          rules={{ message: "Must be 6 characters", value: true }}
        />

        <Button htmlType="submit" type="primary" className="login-btn">
          Kirish
        </Button>

        <footer>
          <span>Dont have an account?</span>{" "}
          <Button type="link" onClick={() => setAuth("login")}>
            Login
          </Button>
        </footer>
      </div>
    </RegisterStyled>
  );
};

export default Register;
