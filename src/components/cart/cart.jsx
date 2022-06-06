import styles from "./cart.module.css";
import { useState } from "react";
import { CartHeader } from "./cartHeader";
import { CartList } from "./cartList";
import { TotalCart } from "./totalCart";

export const Cart = ({ cart, setCart, convertPrice }) => {
  const handleQuantity = (type, id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);

    if (type === "plus") {
      const cartItem = {
        id: found.id,
        image: found.image,
        name: found.name,
        quantity: quantity,
        price: found.price,
        provider: found.provider,
      };
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    } else {
      if (quantity === 0) return;
      const cartItem = {
        id: found.id,
        image: found.image,
        name: found.name,
        quantity: quantity,
        price: found.price,
        provider: found.provider,
      };
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    }
  };

  const onRemove = (id) => {
    setCart(cart.filter((cart) => cart.id !== id));
  };

  const [checkLists, setCheckLists] = useState([]);

  const handleCheckList = (checked, id) => {
    if (checked) {
      setCheckLists([...checkLists, id]);
    } else {
      setCheckLists(checkLists.filter((check) => check !== id));
    }
  };

  const handleCheckAll = (checked) => {
    if (checked) {
      const checkItems = [];
      cart.map((cart) => checkItems.push(`check${cart.id}`));
      setCheckLists(checkItems);
    } else {
      setCheckLists([]);
    }
  };
  const isAllChecked =
    cart.length === checkLists.length && checkLists.length !== 0;

  return (
    <>
      <CartHeader isAllChecked={isAllChecked} handleCheckAll={handleCheckAll} />
      {cart.length !== 0 ? (
        cart.map((cart) => {
          return (
            <CartList
              key={`key-${cart.id}`}
              cart={cart}
              setCart={setCart}
              convertPrice={convertPrice}
              handleQuantity={handleQuantity}
              onRemove={onRemove}
              checkLists={checkLists}
              handleCheckList={handleCheckList}
            />
          );
        })
      ) : (
        <div className={styles.not}>
          <h2>장바구니에 담긴 상품이 없습니다.</h2>
          <p>원하는 상품을 장바구니에 담아보세요!</p>
        </div>
      )}
      {cart.length !== 0 ? (
        <TotalCart cart={cart} convertPrice={convertPrice} />
      ) : (
        ""
      )}
    </>
  );
};
