import React, { useState } from "react";
import { AuthStyled } from "./Auth.style";
import AuthLogo from "../assets/auth-img.png";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

const Auth = () => {
  const [auth, setAuth] = useState<"login" | "register">("login");
  return (
    <AuthStyled>
      <div className="auth-left">
        <img src={AuthLogo} alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          earum delectus beatae quae libero nisi accusantium praesentium
          voluptates iste vitae, numquam fugiat hic velit et temporibus unde
          dolores laudantium autem?
        </p>
      </div>
      <div className="auth-right">
        {auth === "login" ? (
          <Login setAuth={setAuth} />
        ) : (
          <Register setAuth={setAuth} />
        )}
      </div>
    </AuthStyled>
  );
};

export default Auth;
