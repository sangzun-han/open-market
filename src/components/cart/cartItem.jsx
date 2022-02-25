import React, { useEffect, useState } from "react";
import {
  deleteCart,
  getProductDetail,
  putUpdateCart,
} from "../../service/fetcher";
import styles from "./cartItem.module.css";
import TotalCart from "./totalCart";

const CartItem = ({ product, token, stateRefresh }) => {
  const { product_id, quantity, cart_item_id, is_active } = product;
  const [info, setInfo] = useState({});
  const [count, setCount] = useState(quantity);
  const convertPrice = () => {
    return info.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const totalConvertPrice = () => {
    return (info.price * count)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onIncrease = () => {
    setCount((count) => count + 1);
    if (count >= info.stock) {
      setCount(info.stock);
    }
  };

  const onDecrease = () => {
    setCount((count) => count - 1);
    if (count <= 1) setCount(1);
  };

  const handleDelete = () => {
    deleteCart(cart_item_id, token)
      .then(() => {
        stateRefresh();
      })
      .catch(() => {
        alert("삭제에 실패했습니다.");
      });
  };

  useEffect(() => {
    getProductDetail(product_id).then((res) => {
      setInfo(res.data);
    });
  }, [product_id]);

  useEffect(() => {
    const data = {
      product_id: product_id,
      quantity: count,
      is_active: is_active,
    };
    putUpdateCart(cart_item_id, data, token)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }, [product_id, quantity, is_active, token, cart_item_id, count]);

  return (
    <>
      {info.image && (
        <section className={styles.cart_product_list}>
          <img
            className={styles.product_delete}
            src="/images/icon-delete.svg"
            alt="delete"
            onClick={() => handleDelete(cart_item_id)}
          />

          <input type="checkbox" />
          <div className={styles.cart_product_wrap}>
            <div className={styles.cart_product_image}>
              <img src={info.image} alt="product-img" />
            </div>

            <div className={styles.cart_product_info}>
              <p className={styles.seller_store}>{info.seller_store}</p>
              <p className={styles.product_name}>{info.product_name}</p>
              <p className={styles.price}>{convertPrice()}원</p>
              {info.shipping_fee === 0 ? (
                <p className={styles.delivery}>택배배송 / 무료배송</p>
              ) : (
                <p className={styles.delivery}>
                  배송비 : {info.shipping_fee}원
                </p>
              )}
            </div>
          </div>

          <div className={styles.cart_product_count}>
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

          <div className={styles.cart_product_price}>
            <p className={styles.total_price}>{totalConvertPrice()}원</p>
            <button className={styles.btn_submit}>주문하기</button>
          </div>
        </section>
      )}
    </>
  );
};

export default CartItem;
