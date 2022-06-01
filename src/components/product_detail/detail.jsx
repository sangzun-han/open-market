import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TopNavigationBar } from "../header/topNavigationBar/topNavigationBar";

export const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const apiUrl = "/data/products.json";

    axios.get(apiUrl).then((data) => {
      setProduct(
        data.data.products.find((product) => product.id === parseInt(id))
      );
    });
  }, []);
  return (
    <>
      <TopNavigationBar />
      {product.id}
    </>
  );
};
