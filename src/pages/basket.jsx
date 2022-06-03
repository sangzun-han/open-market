import { Cart } from "../components/cart/cart";

const Basket = ({ cart, convertPrice }) => {
  return <Cart cart={cart} convertPrice={convertPrice} />;
};

export default Basket;
