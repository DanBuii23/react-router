import { Link, Outlet } from "react-router-dom";

export default function UserInfor() {
  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <h2>Họ tên: </h2>
      <h2>Ngày sinh: </h2>
      <h2>Địa chỉ: </h2>
      <h2>Email: </h2>
      <nav>
        <Link to="changePassword">Đổi mật khẩu</Link>
      </nav>
      <Outlet /> {/* Đây là nơi route con được hiển thị */}
    </div>
  );
}
