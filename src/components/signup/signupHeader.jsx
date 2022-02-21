import React from "react";
import styles from "./signupHeader.module.css";

const SignupHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/Logo-hodu.png" alt="logo" />
      </div>
    </header>
  );
};

export default SignupHeader;
