import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <div className="bg-blue-600 text-white p-4 flex justify-between">
        <div>🔐 电商独立站</div>
        <div className="space-x-4">
          <Link to="/">首页</Link>
          <Link to="/product">商品</Link>
          <Link to="/cart">购物车</Link>
          <Link to="/login">登录</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
