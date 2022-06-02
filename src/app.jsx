import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home convertPrice={convertPrice} />} />
        <Route
          path="/product/:id"
          element={<Product convertPrice={convertPrice} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
