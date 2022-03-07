import React, { useEffect, useState } from "react";
import { getProductDetail } from "../../service/fetcher";
import styles from "./paymentItem.module.css";

const PaymentItem = ({ product }) => {
  const [info, setInfo] = useState({});
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
        </div>
      </div>

      <div className={styles.product_sale}>
        <p>-</p>
      </div>

      <div className={styles.shipping}>
        <p className={styles.shipping_fee}>{info.shipping_fee}원</p>
      </div>

      <div className={styles.total}>
        <p>17,500원</p>
      </div>
    </div>
  );
};

export default PaymentItem;
