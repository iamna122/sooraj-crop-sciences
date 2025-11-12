import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "./assets/sooraj-logo.PNG";
import "./i18n";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/Faqs";
import Products from "./pages/Products";
import "./App.css";
import Footer from "./components/Footer";
import products from "./data/products"; // ✅ Import product data

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} search={search} setSearch={setSearch} />

      {/* Show search results dynamically */}
      {isOpen && search && <SearchResults search={search} />}

      <Routes>
        <Route path="/" element={<Home search={search} setSearch={setSearch} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

// ✅ Header component
function Header({ isOpen, setIsOpen, search, setSearch }) {
  const location = useLocation();

  return (
    <header
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img src={logo} alt="Sooraj Logo" style={{ height: "48px" }} />
        <h1 style={{ color: "#127a3a", fontSize: "1.4rem", fontWeight: 700 }}>
          Sooraj Crop Sciences
        </h1>
      </div>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "34px",
          fontSize: "1.1rem",
          fontWeight: 600,
        }}
      >
        {["Home", "About", "Products", "Contact", "FAQs"].map((page) => {
          const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
          const active = location.pathname === path;
          return (
            <Link
              key={page}
              to={path}
              style={{
                textDecoration: "none",
                color: active ? "#127a3a" : "#444",
                paddingBottom: "4px",
                borderBottom: active ? "2px solid #127a3a" : "2px solid transparent",
                transition: "all 0.3s ease",
              }}
            >
              {page}
            </Link>
          );
        })}

        {/* 🔍 Search Button */}
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            style={{
              backgroundColor: "#127a3a",
              color: "white",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s ease",
            }}
            title="Search products"
          >
            <FaSearch size={16} />
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            style={{
              padding: "8px 12px",
              width: isOpen ? "220px" : "0px",
              opacity: isOpen ? 1 : 0,
              border: isOpen ? "1px solid #ccc" : "none",
              borderRadius: "6px",
              outline: "none",
              marginLeft: "8px",
              transition: "all 0.4s ease",
              fontSize: "0.95rem",
            }}
          />
        </div>
      </nav>
    </header>
  );
}

// ✅ Search result dropdown component
function SearchResults({ search }) {
  const navigate = useNavigate();
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filtered.length === 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "85px",
        right: "80px",
        backgroundColor: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        zIndex: 999,
        width: "260px",
        padding: "8px 0",
      }}
    >
      {filtered.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate("/products")}
          style={{
            padding: "10px 16px",
            cursor: "pointer",
            borderBottom: "1px solid #eee",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f3fdf6")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default App;
