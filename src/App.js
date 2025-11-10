import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/sooraj-logo.PNG";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/Faqs";
import Products from "./pages/Products";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Sooraj Logo" className="logo" />

          <h1 className="site-title">Sooraj Crop Sciences</h1>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/Products" className="nav-link">
            Products
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/FAQs" className="nav-link">
            FAQs
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
