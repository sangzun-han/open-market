import React from "react";
import styles from "./loginHeader.module.css";

const LoginHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/Logo-hodu.png" alt="logo" />
      </div>
    </header>
  );
};

export default LoginHeader;
