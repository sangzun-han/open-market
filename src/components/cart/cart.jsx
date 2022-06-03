import { CartHeader } from "./cartHeader";
import { CartList } from "./cartList";

export const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <>
      <CartHeader />

      {cart.map((cart) => {
        return <CartList key={`key-${cart.id}`} cart={cart} />;
      })}
    </>
  );
};
