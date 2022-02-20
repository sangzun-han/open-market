import React, { useRef, useState } from "react";
import { login } from "../../service/fetcher";
import LoginFooter from "./loginFooter";
import LoginForm from "./loginForm";
import LoginHeader from "./loginHeader";
const Login = () => {
  const idRef = useRef("");
  const passwordRef = useRef("");
  const [loginType, setLoginType] = useState("BUYER"); // BUYER, SELLER

  const handleLogin = (event) => {
    event.preventDefault();
    const userData = {
      username: idRef.current.value,
      password: passwordRef.current.value,
      login_type: loginType,
    };
    login(userData).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <LoginHeader />
      <LoginForm
        idRef={idRef}
        passwordRef={passwordRef}
        setLoginType={setLoginType}
        handleLogin={handleLogin}
      />
      <LoginFooter />
    </>
  );
};

export default Login;
