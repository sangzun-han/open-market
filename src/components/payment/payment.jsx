import React, { useEffect, useState } from "react";
import { getCookie } from "../../service/cookie";
import { getCart } from "../../service/fetcher";
import TopNavigationBar from "../topNavigationBar/topNavigationBar";
import Order from "./order";
import PaymentHeader from "./paymentHeader";
import PaymentInfo from "./paymentInfo";
import PaymentTotal from "./paymentTotal";

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
      <PaymentTotal products={products} />
      <Order />
    </div>
  );
};

export default Payment;
