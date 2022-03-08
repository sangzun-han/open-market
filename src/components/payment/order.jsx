import React from "react";
import styles from "./order.module.css";
import OrderHeader from "./orderHeader";

const Order = () => {
  return (
    <>
      <OrderHeader />

      <section className={styles.section}>
        <h1>주문자 정보</h1>

        <div className={styles.name}>
          <label htmlFor="name" className={styles.label_name}>
            이름
          </label>
          <input type="text" className={styles.input_name} />
        </div>

        <div className={styles.phone}>
          <label htmlFor="name" className={styles.label_phone}>
            휴대폰
          </label>
          <input type="text" className={styles.input_phone1} /> <span>-</span>
          <input type="text" className={styles.input_phone2} /> <span>-</span>
          <input type="text" className={styles.input_phone3} />
        </div>

        <div className={styles.email}>
          <label htmlFor="name" className={styles.label_email}>
            이메일
          </label>
          <input type="text" className={styles.input_email} />
        </div>
        <div className={styles.address_section}>
          <h2 className={styles.address}>배송지 정보</h2>
        </div>
      </section>
    </>
  );
};

export default Order;
