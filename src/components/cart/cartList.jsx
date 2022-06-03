import styles from "./cart.module.css";
import { useState } from "react";

export const CartList = ({ cart, convertPrice }) => {
  console.log(cart);
  const [quantity, setQuantity] = useState(cart.quantity);

  const handleQuantity = (type) => {
    if (type === "plus") setQuantity(quantity + 1);
    else {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className={styles.cart_product_list}>
      <input type="checkbox" />
      <div className={styles.cart_product_wrap}>
        <div className={styles.cart_product_image}>
          <img src={cart.image} alt="product-img" />
        </div>

        <div className={styles.cart_product_info}>
          <p className={styles.seller_store}>{cart.provider}</p>
          <p className={styles.product_name}>{cart.name}</p>
          <p className={styles.price}>
            {convertPrice(cart.price * quantity)}원
          </p>
          <p className={styles.delivery}>택배배송 / 무료배송</p>
        </div>
      </div>

      <div className={styles.cart_product_count}>
        <img
          className={styles.minus}
          src="/images/icon-minus-line.svg"
          alt="minus"
          onClick={() => {
            handleQuantity("minus");
          }}
        />

        <div className={styles.count}>
          <span>{quantity}</span>
        </div>
        <img
          className={styles.plus}
          src="/images/icon-plus-line.svg"
          alt="plus"
          onClick={() => handleQuantity("plus")}
        />
      </div>

      <div className={styles.cart_product_price}>
        <p className={styles.total_price}></p>
        <button className={styles.btn_submit}>주문하기</button>
      </div>
    </section>
  );
};
