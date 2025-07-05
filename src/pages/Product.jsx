const Product = () => {
  return (
<div className="w-64 bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
  <img src="/sample.jpg" alt="商品" className="rounded" />
  <h2 className="text-xl mt-2">商品标题</h2>
  <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">加购</button>
</div>  );
};

export default Product;
