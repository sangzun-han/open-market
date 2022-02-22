import React, { useEffect, useState } from "react";
import styles from "./signupForm.module.css";

const SignupForm = ({
  idRef,
  pwdRef,
  rePwdRef,
  nameRef,
  firstPhoneRef,
  middlePhoneRef,
  lastPhoneRef,
  handleValidCheck,
}) => {
  const [passwordValid, setPasswordValid] = useState("off");
  const [rePasswordValid, setRePasswordValid] = useState(null);
  const [rePasswordImg, setRePasswordImg] = useState("off");
  const [phoneValid, setPhoneValid] = useState(null);
  const [termValid, setTermValid] = useState(false); // 이용약관
  const [btnValid, setBtnValid] = useState(false);

  const activate = btnValid ? styles.activate : "";

  const passwordCheck = () => {
    const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return reg.test(pwdRef.current.value);
  };

  const phoneCheck = () => {
    const reg = /^010-?([0-9]{3,4})-?([0-9]{4})$/;
    return reg.test(
      firstPhoneRef.current.value +
        middlePhoneRef.current.value +
        lastPhoneRef.current.value
    );
  };

  const handlePassword = (event) => {
    event.preventDefault();
    if (passwordCheck()) setPasswordValid("on");
    else setPasswordValid("off");
  };

  const handleRePassword = () => {
    if (pwdRef.current.value === rePwdRef.current.value) {
      setRePasswordValid(true);
      setRePasswordImg("on");
    } else {
      setRePasswordValid(false);
      setRePasswordImg("off");
    }
  };

  const handlePhone = () => {
    if (phoneCheck()) setPhoneValid(true);
    else setPhoneValid(false);
  };

  const handleIsCheck = () => {
    setTermValid(!termValid);
  };

  useEffect(() => {
    if (passwordValid === "on" && rePasswordValid && phoneValid && termValid) {
      setBtnValid(true);
    } else {
      setBtnValid(false);
    }
  }, [passwordValid, rePasswordValid, phoneValid, termValid]);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.select}>
          <button className={styles.btn_shopper}>구매회원 가입</button>

          <button className={styles.btn_seller}>판매회원 가입</button>
        </div>

        <section className={styles.form}>
          <div className={styles.id_check}>
            <div className={styles.label}>
              <label htmlFor="id" className={styles.label_pos}>
                아이디
              </label>
              <input ref={idRef} className={styles.input_id} type="text" />
            </div>
            <button className={styles.check}>중복확인</button>
          </div>

          <div className={styles.password}>
            <div className={styles.label}>
              <label htmlFor="password">비밀번호</label>
              <input
                ref={pwdRef}
                className={styles.input_password}
                type="password"
                onBlur={handlePassword}
              />
            </div>
            <img src={`images/icon-check-${passwordValid}.svg`} alt="check" />
          </div>

          <div className={styles.check_password}>
            <div className={styles.label}>
              <label htmlFor="password">비밀번호 재확인</label>
              <input
                ref={rePwdRef}
                className={styles.check_input_password}
                type="password"
                onBlur={handleRePassword}
              />
              <span className={styles.err}>
                {rePasswordValid
                  ? ""
                  : rePasswordValid === null
                  ? ""
                  : "비밀번호가 일치하지 않습니다."}
              </span>
            </div>

            <img src={`images/icon-check-${rePasswordImg}.svg`} alt="check" />
          </div>

          <div className={styles.name}>
            <div className={styles.label}>
              <label htmlFor="name">이름</label>
              <input ref={nameRef} className={styles.name_input} type="name" />
            </div>
          </div>

          <div className={styles.phone}>
            <div className={styles.label}>
              <label htmlFor="name">휴대폰 번호</label>
              <div className={styles.phone_nubmer}>
                <input ref={firstPhoneRef} type="text" defaultValue="010" />
                <input ref={middlePhoneRef} type="text" />
                <input ref={lastPhoneRef} type="text" onBlur={handlePhone} />
              </div>
            </div>
            <span className={styles.err}>
              {phoneValid
                ? ""
                : phoneValid === null
                ? ""
                : "핸드폰번호는 010으로 시작해야 하는 10~11자리 숫자여야 합니다."}
            </span>
          </div>
        </section>
      </main>

      <div className={styles.terms}>
        <input type="checkbox" checked={termValid} onChange={handleIsCheck} />
        <span>
          호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
          동의합니다.
        </span>
      </div>

      <div className={styles.signup}>
        <button
          className={`${styles.btn_signup} ${activate}`}
          onClick={handleValidCheck}
          disabled={!btnValid}
        >
          가입하기
        </button>
      </div>
    </>
  );
};

export default SignupForm;
