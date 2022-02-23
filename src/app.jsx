import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Signup from "./components/signup/signup";
import ProductDetail from "./components/productDetail/productDetail";
import Cart from "./components/cart/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart/" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
