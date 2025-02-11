import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";
import Posts from "./pages/posts";
import PostDetail from "./pages/postdetail";

function App() {
  return (
    <>
      {/* <div className="container">
        <nav className="border-none">
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/about">About</Link>
          </button>
          <button>
            <Link to="/contact">Contact</Link>
          </button>
        </nav>
      </div> */}
      <div className=" bg-gray-100 text-gray-900">
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <ul className="flex justify-center gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Bài viết
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
