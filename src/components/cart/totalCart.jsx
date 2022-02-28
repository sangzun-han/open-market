import React, { useEffect, useState } from "react";
import { getProductDetail } from "../../service/fetcher";
import styles from "./totalCart.module.css";

const TotalCart = ({ products }) => {
  const [total, setTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    let cartItems = [];
    let quantity = [];
    let shipping_fee = 0;
    let price = 0;
    if (products) {
      products.forEach((product) => {
        cartItems.push(product.product_id);
        quantity.push(product.quantity);
      });
      cartItems.forEach((cartItem, index) => {
        getProductDetail(cartItem).then((res) => {
          setTotal((price += +res.data.price * quantity[index]));
          setShippingFee((shipping_fee += res.data.shipping_fee));
        });
      });
    }
  }, [products]);

  return (
    <>
      <div className={styles.total}>
        <div className={styles.total_price}>
          <p className={styles.cart_product_total_price}>총 상품금액</p>
          <p className={styles.cart_product_price}>{convertPrice(total)}</p>
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
          <p className={styles.cart_product_delivery_price}>
            {convertPrice(shippingFee)}
          </p>
        </div>

        <div className={styles.payment}>
          <p className={styles.cart_prouct_payment}>결정 예정 금액</p>
          <p className={styles.cart_prouct_payment_price}>
            {convertPrice(total + shippingFee)}원
          </p>
        </div>
      </div>
      <div className={styles.btn}>
        <button className={styles.btn_submit}>주문하기</button>
      </div>
    </>
  );
};

export default TotalCart;
