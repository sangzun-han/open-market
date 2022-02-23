import React from "react";
import { getCookie } from "../../service/cookie";
import { putCart } from "../../service/fetcher";
import styles from "./productDetailInfo.module.css";

const ProductDetailInfo = ({ product, count, setCount }) => {
  const { product_id, product_name, image, price, seller_store } = product;
  const token = getCookie("token");
  const isCheck = token ? true : false;

  const convertPrice = () => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const totalConvertPrice = () => {
    return (price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleCart = () => {
    const data = {
      product_id: product_id,
      quantity: count,
      check: isCheck,
    };
    console.log(data);
    putCart(data, token).then((res) => {
      console.log(res);
    });
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
            onClick={onDecrease}
          />

          <div className={styles.count}>
            <span>{count}</span>
          </div>

          <img
            className={styles.plus}
            src="/images/icon-plus-line.svg"
            alt="plus"
            onClick={onIncrease}
          />
        </div>

        <div className={styles.line}></div>

        <div className={styles.sum}>
          <span className={styles.sum_price}>총 상품 금액</span>

          <div className={styles.total_info}>
            <span className={styles.total}>
              총 수량 <span className={styles.total_count}>{count}개</span>
            </span>
            <span className={styles.total_price}>
              {totalConvertPrice()}
              <span className={styles.total_unit}>원</span>
            </span>
          </div>
        </div>

        <div className={styles.btn}>
          <button className={styles.btn_buy}>바로 구매</button>
          <button className={styles.btn_cart} onClick={handleCart}>
            장바구니
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailInfo;
