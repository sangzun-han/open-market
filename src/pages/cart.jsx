const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((item) => {
        return <span>{item.quantity}</span>;
      })}
    </div>
  );
};

export default Cart;
