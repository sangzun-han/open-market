import { EventBanner } from "../eventBanner/eventBanner";
import { TopNavigationBar } from "../header/topNavigationBar/topNavigationBar";
import { Product } from "../products/product";
import data from "../../data/products.json";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <>
      <TopNavigationBar />
      <EventBanner />
      <main className={styles.flex_wrap}>
        {data.products.map((product) => {
          return <Product key={`key-${product.id}`} product={product} />;
        })}
      </main>
    </>
  );
};
