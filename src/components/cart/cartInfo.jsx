import React from "react";
import styles from "./cartInfo.module.css";
import CartItem from "./cartItem";

const CartInfo = ({ products, token, setProducts, stateRefresh }) => {
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

      {products.length !== 0 ? (
        products.map((product) => {
          return (
            <CartItem
              key={product.product_id}
              product={product}
              setProducts={setProducts}
              token={token}
              stateRefresh={stateRefresh}
            />
          );
        })
      ) : (
        <div className={styles.not}>
          <h2>장바구니에 담긴 상품이 없습니다.</h2>
          <p>원하는 상품을 장바구니에 담아보세요!</p>
        </div>
      )}
    </>
  );
};

export default CartInfo;
