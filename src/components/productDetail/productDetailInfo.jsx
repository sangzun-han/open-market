import React from "react";
import styles from "./productDetailInfo.module.css";

const ProductDetailInfo = ({ product }) => {
  const { product_name, image, price, seller_store } = product;
  const convertPrice = () => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <main className={styles.main}>
      <section className={styles.product}>
        <div className={styles.product_img}>
          <img src={image} alt="product" />
        </div>
      </section>
      <section className={styles.product}>
        <div className={styles.product_info}>
          <p className={styles.seller_store}>{seller_store}</p>
          <p className={styles.product_name}>{product_name}</p>
          <span className={styles.price}>
            {convertPrice()}
            <span className={styles.unit}>원</span>
          </span>
        </div>

        <div className={styles.delivery}>
          <p>택배배송 / 무료배송</p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.amount}>
          <img
            className={styles.minus}
            src="/images/icon-minus-line.svg"
            alt="minus"
          />

          <div className={styles.count}>
            <span>1</span>
          </div>

          <img
            className={styles.plus}
            src="/images/icon-plus-line.svg"
            alt="plus"
          />
        </div>

        <div className={styles.line}></div>

        <div className={styles.sum}>
          <span className={styles.sum_price}>총 상품 금액</span>

          <div className={styles.total_info}>
            <span className={styles.total}>
              총 수량 <span className={styles.total_count}>1개</span>
            </span>
            <span className={styles.total_price}>
              {convertPrice()}
              <span className={styles.total_unit}>원</span>
            </span>
          </div>
        </div>

        <div className={styles.btn}>
          <button className={styles.btn_buy}>바로 구매</button>
          <button className={styles.btn_cart}>장바구니</button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailInfo;
