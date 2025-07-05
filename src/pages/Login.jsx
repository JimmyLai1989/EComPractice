const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">登录</h2>
        <input
          type="email"
          placeholder="邮箱"
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="密码"
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          登录
        </button>
      </div>
    </div>
  );
};

export default Login;
