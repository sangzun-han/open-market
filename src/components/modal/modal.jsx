import React from "react";
import styles from "./modal.module.css";

const Modal = ({ setModal }) => {
  return (
    <div className={styles.modal}>
      <h1>로그인이 필요한 서비스입니다.</h1>
      <h1>로그인 하시겠습니까?</h1>
      <div className={styles.btn}>
        <button className={styles.btn_no} onClick={() => setModal(false)}>
          아니오
        </button>
        <button className={styles.btn_yes}>예</button>
      </div>
    </div>
  );
};

export default Modal;
