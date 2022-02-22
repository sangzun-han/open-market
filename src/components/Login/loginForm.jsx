import React from "react";
import styles from "./loginForm.module.css";

const LoginForm = ({ idRef, passwordRef, setLoginType, handleLogin }) => {
  return (
    <main className={styles.main}>
      <form onSubmit={handleLogin}>
        <div className={styles.select}>
          <button
            className={styles.btn_shopper}
            onClick={() => setLoginType("BUYER")}
          >
            구매회원 로그인
          </button>

          <button
            className={styles.btn_seller}
            onClick={() => setLoginType("SELLER")}
          >
            판매회원 로그인
          </button>
        </div>

        <div className={styles.login_info}>
          <input
            ref={idRef}
            className={styles.user_id}
            type="text"
            placeholder="아이디"
          />
          <input
            ref={passwordRef}
            className={styles.user_password}
            type="password"
            placeholder="비밀번호"
          />
        </div>

        <div className={styles.login}>
          <button className={styles.btn_login} type="submit">
            로그인
          </button>
        </div>
      </form>
    </main>
  );
};
export default LoginForm;
