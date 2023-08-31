import { Button, Input } from "antd";
import { RegisterStyled } from "./Register.style";

interface IRegister {
  setAuth: (auth: "login" | "register") => void;
}

const Register = ({ setAuth }: IRegister) => {
  const submit = () => {
    localStorage.setItem("token", "token");
  };
  return (
    <RegisterStyled onSubmit={submit}>
      <h2>Tizimga kirish</h2>
      <div className="register">
        <p>
          <label htmlFor="ivv">IVV</label>
          <Input placeholder="IVV" id="ivv" />
        </p>
        <p>
          <label htmlFor="viib">VIIB Boshqarmasi</label>
          <Input placeholder="VIIB Boshqarmasi" id="viib" />
        </p>
        <p>
          <label htmlFor="tuman-bo'lim">Tuman IIBo'lim</label>
          <Input placeholder="Tuman IIBo'lim" id="tuman-bo'lim" />
        </p>
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
