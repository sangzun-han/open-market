import React from "react";
import styles from "./cartInfo.module.css";
import CartItem from "./cartItem";

const CartInfo = ({ products }) => {
  return (
    <>
      <div className={styles.tab_title}>
        <div className={styles.check}>
          <input type="checkbox" />
        </div>
        <span className={styles.title}>상품정보</span>
        <span className={styles.count}>수량</span>
        <span className={styles.price}>상품금액</span>
      </div>

      {products.map((product) => {
        return <CartItem key={product.product_id} product={product} />;
      })}
    </>
  );
};

export default CartInfo;
