import { Navigate, Outlet } from "react-router-dom";
interface AuthenProps {
  isAuthen: boolean; // Trạng thái đăng nhập
  redirectPath?: string; // Đường dẫn chuyển hướng nếu không có quyền
}
export default function Authen({
  isAuthen,
  redirectPath = "/login",
}: AuthenProps) {
  return isAuthen ? <Outlet /> : <Navigate to={redirectPath} />;
}
