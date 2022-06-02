import { useEffect, useState } from "react";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import styles from "./main.module.css";
import axios from "axios";

export const Main = ({ convertPrice }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "data/products.json";

    axios.get(apiUrl).then((data) => {
      setProducts(data.data.products);
    });
  }, []);
  return (
    <>
      <EventBanner />
      <main className={styles.flex_wrap}>
        {products.map((product) => {
          return (
            <Product
              key={`key-${product.id}`}
              product={product}
              convertPrice={convertPrice}
            />
          );
        })}
      </main>
    </>
  );
};
