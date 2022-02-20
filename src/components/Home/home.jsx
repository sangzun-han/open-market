import React, { useEffect, useState } from "react";
import { getProducts } from "../../service/fetcher";
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
      <h1>Home</h1>
    </div>
  );
};

export default Home;
