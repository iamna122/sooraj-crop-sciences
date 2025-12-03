// this is navabr 123
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/sooraj-logo.PNG";
import products from "../data/products";
import "./Navbar.css";

export default function Navbar({ search, setSearch }) {
  const location = useLocation();
  const pages = ["Home", "About", "Products", "Contact", "FAQs"];

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearchChange = (value) => {
    setSearch(value);
    if (value.trim() === "") return setResults([]);

    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LEFT — Logo */}
        <div className="nav-left">
          <img src={logo} alt="Sooraj Logo" className="nav-logo" />
          <h1 className="nav-title">Sooraj Crop Sciences</h1>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={23} /> : <FaBars size={23} />}
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {pages.map((page) => {
            const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
            const active = location.pathname === path;
            return (
              <Link
                key={page}
                to={path}
                className={`nav-link ${active ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {page}
              </Link>
            );
          })}

          {/* MOBILE SEARCH INSIDE MENU */}
          <div className="mobile-search">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </nav>

        {/* DESKTOP SEARCH */}
        <div className="nav-search">
          <div className="search-icon" onClick={() => setIsOpen(!isOpen)}>
            <FaSearch size={15} />
          </div>

          <input
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={(e) => handleSearchChange(e.target.value)}
            className={`search-input ${isOpen ? "open" : ""}`}
          />

          {isOpen && results.length > 0 && (
            <div className="search-results">
              {results.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.id}`}
                  className="search-result-item"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
