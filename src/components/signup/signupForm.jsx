import React from "react";
import styles from "./signupForm.module.css";

const SignupForm = () => {
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
              <input className={styles.input_id} type="text" />
            </div>
            <button className={styles.check}>중복확인</button>
          </div>

          <div className={styles.password}>
            <div className={styles.label}>
              <label htmlFor="password">비밀번호</label>
              <input className={styles.input_password} type="password" />
            </div>
            <img src="images/icon-check-off.svg" alt="check" />
          </div>

          <div className={styles.check_password}>
            <div className={styles.label}>
              <label htmlFor="password">비밀번호 재확인</label>
              <input className={styles.check_input_password} type="password" />
            </div>
            <img src="images/icon-check-on.svg" alt="check" />
          </div>

          <div className={styles.name}>
            <div className={styles.label}>
              <label htmlFor="name">이름</label>
              <input className={styles.name_input} type="name" />
            </div>
          </div>

          <div className={styles.phone}>
            <div className={styles.label}>
              <label htmlFor="name">휴대폰 번호</label>
              <div className={styles.phone_nubmer}>
                <input type="text" value="010" />
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </div>

          <div className={styles.email}>
            <div className={styles.label}>
              <label htmlFor="name">이메일</label>
              <div className={styles.email_address}>
                <input type="text" />
                <span>@</span>
                <input type="text" />
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
        <button className={styles.btn_signup}>가입하기</button>
      </div>
    </>
  );
};

export default SignupForm;
