import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
