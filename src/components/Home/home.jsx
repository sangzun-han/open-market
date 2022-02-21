import React, { useEffect, useState } from "react";
import { getProducts } from "../../service/fetcher";
import EventBanner from "../eventBanner/eventBanner";
import TopNavigationBar from "../topNavigationBar/topNavigationBar";
import ProductList from "./productList";
import styles from "./home.module.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data.results);
    });
  }, []);

  return (
    <>
      <TopNavigationBar />
      <EventBanner />
      <main className={styles.flex_wrap}>
        {products.map((product) => {
          return (
            <ProductList key={`key-${product.product_id}`} product={product} />
          );
        })}
      </main>
    </>
  );
};

export default Home;
