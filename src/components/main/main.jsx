import React from "react";
import EventBanner from "../eventBanner/eventBanner";
import TopNavigationBar from "../header/topNavigationBar/topNavigationBar";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <>
      <TopNavigationBar />
      <EventBanner />
      <main className={styles.flex_wrap}></main>
    </>
  );
};
