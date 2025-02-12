export default function ChangePassWord() {
  return (
    <div>
      <label>Mật khẩu hiện tại</label>
      <input type="password" placeholder="Nhập mật khẩu cũ" />
      <br />
      <label htmlFor="">Mật khẩu mới</label>
      <input type="password" placeholder="Nhập mật khẩu mới" />
      <br />
      <label htmlFor="">Nhập lại mật khẩu mới</label>
      <input type="password" placeholder="Nhập lại mật khẩu mới" />
      <br />
      <button className="bg-gray-200 hover:bg-gray-400 py-1 px-2 active:bg-gray-600 active:text-white">
        Chấp nhận
      </button>
    </div>
  );
}
