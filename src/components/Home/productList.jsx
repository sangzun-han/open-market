import React from "react";
import { Link } from "react-router-dom";
import styles from "./productList.module.css";

const ProductList = ({ product }) => {
  const { product_id, product_name, image, price, seller_store } = product;
  return (
    <div className={styles.product}>
      <Link to={`/product/${product_id}`}>
        <div className={styles.product_image}>
          <img src={image} alt="product" />
        </div>
      </Link>
      <div className={styles.store}>
        <span>{seller_store}</span>
      </div>

      <div className={styles.product_name}>
        <span>{product_name}</span>
      </div>

      <div className={styles.product_price}>
        <span className={styles.price}>{price}</span>
        <span className={styles.unit}>원</span>
      </div>
    </div>
  );
};

export default ProductList;
