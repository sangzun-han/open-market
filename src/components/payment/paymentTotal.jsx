import React, { useEffect, useState } from "react";
import { getProductDetail } from "../../service/fetcher";
import styles from "./paymentTotal.module.css";

const PaymentTotal = ({ products }) => {
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
    <div className={styles.total}>
      <p>
        총 주문 금액 <span>{convertPrice(total + shippingFee)}</span>
      </p>
    </div>
  );
};

export default PaymentTotal;
