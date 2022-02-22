import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../service/fetcher";
import ProductDetailInfo from "./productDetailInfo";
import TopNavigationBar from "../topNavigationBar/topNavigationBar";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    getProductDetail(productId).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);
  return (
    <>
      <TopNavigationBar />
      <ProductDetailInfo product={product} />
    </>
  );
};

export default ProductDetail;
