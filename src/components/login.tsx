export default function Login() {
  return (
    <div>
      <h2>Đăng nhập</h2>
      <label>Tài khoản: </label>
      <input type="text" placeholder="Nhập tài khoản" />
      <br />
      <label htmlFor="">Mật khẩu: </label>
      <input type="password" placeholder="Nhập mật khẩu" />
      <br />
      <button className="bg-gray-200 hover:bg-gray-400 py-1 px-2 active:bg-gray-600 active:text-white">
        Đăng nhập
      </button>
    </div>
  );
}
