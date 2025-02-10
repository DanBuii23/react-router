import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <div className="container">
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
