import React, { useEffect, useState } from "react";
import { getProductDetail } from "../../service/fetcher";
import styles from "./cartItem.module.css";

const CartItem = ({ product }) => {
  console.log(product);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getProductDetail(product.product_id).then((res) => {
      console.log(res.data);
      setInfo(res.data);
    });
  }, [product.product_id]);
  return (
    <section className={styles.cart_product_list}>
      <input type="checkbox" />
      <div className={styles.cart_product_wrap}>
        <div className={styles.cart_product_image}>
          <img src={info.image} alt="product-img" />
        </div>

        <div className={styles.cart_product_info}>
          <p className={styles.seller_store}>{info.seller_store}</p>
          <p className={styles.product_name}>{info.product_name}</p>
          <p className={styles.price}>{info.price}</p>
          <p className={styles.delivery}>택배배송 / 무료배송</p>
        </div>
      </div>

      <div className={styles.cart_product_count}>
        <img
          className={styles.minus}
          src="/images/icon-minus-line.svg"
          alt="minus"
        />

        <div className={styles.count}>
          <span>{product.quantity}</span>
        </div>

        <img
          className={styles.plus}
          src="/images/icon-plus-line.svg"
          alt="plus"
        />
      </div>

      <div className={styles.cart_product_price}>
        <p className={styles.total_price}>29000원</p>
        <button className={styles.btn_submit}>주문하기</button>
      </div>
    </section>
  );
};

export default CartItem;
