import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";
import Posts from "./pages/posts";
import PostDetail from "./pages/postdetail";
import UserInforRoutes from "./routes/userInforRoutes";
import Authen from "./routes/authen";
import Login from "./components/login";

const isAuthen = false;

function App() {
  return (
    <>
      <div className=" bg-gray-100 text-gray-900">
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="flex justify-center gap-5">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Bài viết
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Giới thiệu
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Liên hệ
            </NavLink>
            <NavLink
              to="/userInfor"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Người dùng
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Authen isAuthen={isAuthen} />}>
            <Route path="/posts" element={<Posts />} />
            {/* Điều hướng chi tiết = tham số URL */}
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Nested Routes */}
            <Route path="/userInfor/*" element={<UserInforRoutes />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
