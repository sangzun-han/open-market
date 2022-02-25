import React from "react";

import styles from "./totalCart.module.css";

const TotalCart = ({ totalPrice, totalShippingFee }) => {
  return (
    <div className={styles.total}>
      <div className={styles.total_price}>
        <p className={styles.cart_product_total_price}>총 상품금액</p>
        <p className={styles.cart_product_price}>{totalPrice}</p>
      </div>
      <div className={styles.pay_minus}>
        <img src="/images/icon-minus-line.svg" alt="minus" />
      </div>
      <div className={styles.sale}>
        <p className={styles.cart_product_sale}>상품 할인</p>
        <p className={styles.cart_product_sale_price}>0원</p>
      </div>
      <div className={styles.pay_plus}>
        <img src="/images/icon-plus-line.svg" alt="plus" />
      </div>
      <div className={styles.delivery}>
        <p className={styles.cart_product_delivery}>배송비</p>
        <p className={styles.cart_product_delivery_price}>{totalShippingFee}</p>
      </div>

      <div className={styles.payment}>
        <p className={styles.cart_prouct_payment}>결정 예정 금액</p>
        <p className={styles.cart_prouct_payment_price}>
          {totalPrice + totalShippingFee}원
        </p>
      </div>
    </div>
  );
};

export default TotalCart;
