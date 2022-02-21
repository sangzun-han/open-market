import React from "react";
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
              />
            </div>
            <img src="images/icon-check-off.svg" alt="check" />
          </div>

          <div className={styles.check_password}>
            <div className={styles.label}>
              <label htmlFor="password">비밀번호 재확인</label>
              <input
                ref={rePwdRef}
                className={styles.check_input_password}
                type="password"
              />
            </div>
            <img src="images/icon-check-on.svg" alt="check" />
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
                <input ref={firstPhoneRef} type="text" value="010" />
                <input ref={middlePhoneRef} type="text" />
                <input ref={lastPhoneRef} type="text" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className={styles.terms}>
        <input type="checkbox" />
        <span>
          호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
          동의합니다.
        </span>
      </div>

      <div className={styles.signup}>
        <button className={styles.btn_signup} onClick={handleValidCheck}>
          가입하기
        </button>
      </div>
    </>
  );
};

export default SignupForm;
