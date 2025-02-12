import { Routes, Route } from "react-router-dom";
import UserInfor from "../components/userInfor";
import ChangePassWord from "../components/changePassword";

export default function UserInforRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserInfor />}>
        <Route path="changePassword" element={<ChangePassWord />} />
      </Route>
    </Routes>
  );
}
