import React from "react";
import styles from "./orderHeader.module.css";

const OrderHeader = () => {
  return (
    <header className={styles.header}>
      <h1>배송정보</h1>
    </header>
  );
};

export default OrderHeader;
