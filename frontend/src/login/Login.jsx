import { useContext, useEffect, useState } from "react";
import "./login.css";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { setIsUserLogged } = useContext(AuthContext);

  const navigate = useNavigate();

  const validateLogin = () => {
    if (userName.length > 0 && userPassword.length > 0) {
      setIsUserLogged(true);
      navigate("/home", { replace: true });
    }
  };

  return (
    <div className="container">
      <div className="data-container">
        <div className="title">Login</div>
        <input
          autoFocus
          value={userName}
          name="userName"
          autoComplete="username"
          placeholder={"Ingresa el mail"}
          onChange={(evt) => {
            setUserName(evt.target.value);
          }}
        />
        <input
          autoFocus
          type="password"
          name="userPassword"
          autoComplete="current-password"
          value={userPassword}
          placeholder={"Ingresa el password"}
          onChange={(evt) => {
            setUserPassword(evt.target.value);
          }}
        />
        <div
          className="block"
          onClick={() => {
            validateLogin(true);
          }}
        >
          Enter
        </div>
      </div>
    </div>
  );
};

export default Login;
