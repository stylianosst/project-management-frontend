import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home </Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/contact">Contact </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home name="User" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
