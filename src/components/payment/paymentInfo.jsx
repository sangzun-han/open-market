import React from "react";
import styles from "./paymentInfo.module.css";
import PaymentItem from "./paymentItem";

const PaymentInfo = ({ products }) => {
  return (
    <>
      <div className={styles.tab_title}>
        <span className={styles.title}>상품정보</span>
        <span className={styles.count}>할인</span>
        <span className={styles.price}>배송비</span>
        <span className={styles.price}>주문금액</span>
      </div>

      {products.map((product) => {
        return <PaymentItem key={product.product_id} product={product} />;
      })}
    </>
  );
};

export default PaymentInfo;
