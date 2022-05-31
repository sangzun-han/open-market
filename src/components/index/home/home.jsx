import React from "react";
import EventBanner from "../eventBanner/eventBanner";
import TopNavigationBar from "../../header/topNavigationBar/topNavigationBar";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <TopNavigationBar />
      <EventBanner />
      <main className={styles.flex_wrap}></main>
    </>
  );
};

export default Home;
