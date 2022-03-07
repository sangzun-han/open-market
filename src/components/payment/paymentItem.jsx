import React, { useEffect, useState } from "react";
import { getProductDetail } from "../../service/fetcher";
import styles from "./paymentItem.module.css";

const PaymentItem = ({ product }) => {
  const [info, setInfo] = useState({});

  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    getProductDetail(product.product_id).then((res) => setInfo(res.data));
  }, [product.product_id]);
  return (
    <div className={styles.product_wrapper}>
      <div className={styles.product_wrap}>
        <div className={styles.product_image}>
          <img src={info.image} alt="product-img" />
        </div>
        <div className={styles.product_info}>
          <p className={styles.seller_store}>{info.seller_store}</p>
          <p className={styles.product_name}>{info.product_name}</p>
          <p className={styles.product_quantity}>수량 : {product.quantity}개</p>
        </div>
      </div>

      <div className={styles.product_sale}>
        <p>-</p>
      </div>

      <div className={styles.shipping}>
        <p className={styles.shipping_fee}>{info.shipping_fee}원</p>
      </div>

      <div className={styles.total}>
        <p>{convertPrice(info.price * product.quantity)}원</p>
      </div>
    </div>
  );
};

export default PaymentItem;
