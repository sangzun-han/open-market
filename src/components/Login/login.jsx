import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../service/cookie";
import { login } from "../../service/fetcher";
import LoginFooter from "./loginFooter";
import LoginForm from "./loginForm";
import LoginHeader from "./loginHeader";
const Login = () => {
  const navigate = useNavigate();
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
    login(userData)
      .then((res) => {
        navigate("/");
        setCookie("token", res.data.token);
      })
      .catch(() => {
        alert("로그인 정보를 확인해주세요!");
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
