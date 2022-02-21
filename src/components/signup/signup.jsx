import React, { useRef } from "react";
import { signup } from "../../service/fetcher";
import SignupForm from "./signupForm";
import SignupHeader from "./signupHeader";

const Signup = () => {
  const idRef = useRef("");
  const pwdRef = useRef("");
  const rePwdRef = useRef("");
  const nameRef = useRef("");
  const firstPhoneRef = useRef("");
  const middlePhoneRef = useRef("");
  const lastPhoneRef = useRef("");
  const handleValidCheck = () => {
    const userData = {
      username: idRef.current.value, // 아이디
      password: pwdRef.current.value,
      password2: rePwdRef.current.value,
      name: nameRef.current.value, // 이름
      phone_number:
        firstPhoneRef.current.value +
        middlePhoneRef.current.value +
        lastPhoneRef.current.value,
    };
    console.log(userData);
    signup(userData).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <SignupHeader />
      <SignupForm
        idRef={idRef}
        pwdRef={pwdRef}
        rePwdRef={rePwdRef}
        firstPhoneRef={firstPhoneRef}
        middlePhoneRef={middlePhoneRef}
        lastPhoneRef={lastPhoneRef}
        nameRef={nameRef}
        handleValidCheck={handleValidCheck}
      />
    </>
  );
};

export default Signup;
