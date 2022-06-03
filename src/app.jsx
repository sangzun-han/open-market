import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import { useState } from "react";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";

function App() {
  const [cart, setCart] = useState([]);
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <BrowserRouter>
      <TopNavigationBar cart={cart} />
      <Routes>
        <Route path="/" element={<Home convertPrice={convertPrice} />} />
        <Route
          path="/product/:id"
          element={
            <Product
              convertPrice={convertPrice}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Basket cart={cart} convertPrice={convertPrice} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
