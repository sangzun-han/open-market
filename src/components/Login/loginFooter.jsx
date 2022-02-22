import React from "react";
import { Link } from "react-router-dom";
import styles from "./loginFooter.module.css";

const LoginFooter = () => {
  return (
    <div className={styles.login_footer}>
      <Link to="/signup">
        <span className={styles.signup}>회원가입</span>
      </Link>
      <span className={styles.search_passwrod}>비밀번호 찾기</span>
    </div>
  );
};

export default LoginFooter;
