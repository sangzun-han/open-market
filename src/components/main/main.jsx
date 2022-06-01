import { useEffect, useState } from "react";
import { EventBanner } from "../eventBanner/eventBanner";
import { TopNavigationBar } from "../header/topNavigationBar/topNavigationBar";
import { Product } from "../products/product";
import styles from "./main.module.css";
import axios from "axios";

export const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "data/products.json";

    axios.get(apiUrl).then((data) => {
      console.log(data);
      setProducts(data.data.products);
    });
  }, []);
  return (
    <>
      <TopNavigationBar />
      <EventBanner />
      <main className={styles.flex_wrap}>
        {products.map((product) => {
          return <Product key={`key-${product.id}`} product={product} />;
        })}
      </main>
    </>
  );
};
