import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-lg font-bold">🛍 电商独立站</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">首页</Link>
        <Link to="/product" className="hover:underline">商品</Link>
        <Link to="/cart" className="hover:underline">购物车</Link>
        <Link to="/login" className="hover:underline">登录</Link>
      </div>
    </nav>
  );
};

export default Navbar;
