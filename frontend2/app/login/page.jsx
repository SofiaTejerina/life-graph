"use client";

import { useState } from "react";
import styles from "../ui/styles/login.module.css";
import generalStyles from "../ui/styles/global.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const router = useRouter();

  const validateLogin = () => {
    if (userName.length > 0 && userPassword.length > 0) {
      localStorage.setItem("token", true);
      router.push("/board");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.data_container}>
        <div className={styles.title}>Login</div>
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
          className={generalStyles.block}
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
