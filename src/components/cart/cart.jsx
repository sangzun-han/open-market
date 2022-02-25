import React, { useEffect, useState } from "react";
import { getCart, getProductDetail } from "../../service/fetcher";
import { getCookie } from "../../service/cookie";
import TopNavigationBar from "../topNavigationBar/topNavigationBar";
import CartHeader from "./cartHeader";
import CartInfo from "./cartInfo";
import TotalCart from "./totalCart";

const Cart = () => {
  let price = 0;
  let shippingFee = 0;
  const token = getCookie("token");
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalShippingFee, setTotalShippingFee] = useState(0);

  const handlePrice = () => {
    products.map((product) => {
      getProductDetail(product.product_id).then((res) => {
        setTotalPrice((price += res.data.price));
        setTotalShippingFee((shippingFee += res.data.shipping_fee));
      });
    });
  };

  const stateRefresh = () => {
    getCart(token).then((res) => setProducts(res.data.results));
  };

  useEffect(() => {
    getCart(token).then((res) => setProducts(res.data.results));
    handlePrice();
  }, [token]);
  return (
    <div>
      <TopNavigationBar />
      <CartHeader />
      {products && (
        <CartInfo
          products={products}
          totalPrice={totalPrice}
          setProducts={setProducts}
          token={token}
          stateRefresh={stateRefresh}
        />
      )}
      {products.length !== 0 && (
        <TotalCart
          totalPrice={totalPrice}
          totalShippingFee={totalShippingFee}
        />
      )}
    </div>
  );
};

export default Cart;
