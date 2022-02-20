import React from "react";
import styles from "./loginFooter.module.css";

const LoginFooter = () => {
  return (
    <div className={styles.login_footer}>
      <span className={styles.signup}>회원가입</span>
      <span className={styles.search_passwrod}>비밀번호 찾기</span>
    </div>
  );
};

export default LoginFooter;
