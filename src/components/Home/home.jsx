import React, { useEffect, useState } from "react";
import { getProducts } from "../../service/fetcher";
import EventBanner from "../eventBanner/eventBanner";
import TopNavigationBar from "../topNavigationBar/topNavigationBar";
import ProductList from "./productList";
import styles from "./home.module.css";
import Footer from "../footer/footer";
import { getCookie } from "../../service/cookie";
const Home = () => {
  const [products, setProducts] = useState([]);
  const token = getCookie("token");

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data.results);
    });
  }, []);

  return (
    <>
      <TopNavigationBar token={token} />
      <EventBanner />
      {products && (
        <main className={styles.flex_wrap}>
          {products.map((product) => {
            return (
              <ProductList
                key={`key-${product.product_id}`}
                product={product}
              />
            );
          })}
        </main>
      )}
      <Footer />
    </>
  );
};

export default Home;
