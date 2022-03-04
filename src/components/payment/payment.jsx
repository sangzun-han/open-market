import React, { useEffect, useState } from "react";
import { getCookie } from "../../service/cookie";
import { getCart } from "../../service/fetcher";
import TopNavigationBar from "../topNavigationBar/topNavigationBar";
import PaymentHeader from "./paymentHeader";
import PaymentInfo from "./paymentInfo";

const Payment = () => {
  const token = getCookie("token");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart(token).then((res) => {
      setProducts(res.data.results);
    });
  }, [token]);

  return (
    <div>
      <TopNavigationBar token={token} />
      <PaymentHeader />
      {products && <PaymentInfo products={products} />}
    </div>
  );
};

export default Payment;
