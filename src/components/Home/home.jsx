import React, { useEffect, useState } from "react";
import { getProducts } from "../../service/fetcher";
import EventBanner from "../eventBanner/eventBanner";
import TopNavigationBar from "../topNavigationBar/topNavigationBar";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data.results);
    });
  }, []);

  return (
    <div>
      <TopNavigationBar />
      <EventBanner />
    </div>
  );
};

export default Home;
