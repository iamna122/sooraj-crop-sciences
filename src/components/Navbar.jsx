import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/sooraj-logo.PNG";
import products from "../data/products";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import "./Navbar.css";

export default function Navbar({ search, setSearch }) {
  const location = useLocation();

  const { t } = useTranslation();

  const pages = [
    { key: "Home", path: "/" },
    { key: "About", path: "/about" },
    { key: "Products", path: "/products" },
    { key: "Contact", path: "/contact" },
    { key: "Career", path: "/career" },
  ];

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

        {/* Logo */}
        <div className="nav-left">
          <img src={logo} alt="Sooraj Logo" className="nav-logo" />
          <h1 className="nav-title">Sooraj Crop Sciences</h1>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={23} /> : <FaBars size={23} />}
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {pages.map((page) => {
            const active = location.pathname === page.path;
            return (
              <Link
                key={page.key}
                to={page.path}
                className={`nav-link ${active ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(page.key)}
              </Link>
            );
          })}

          {/* Mobile Search */}
          <div className="mobile-search">
            <input
              type="text"
              placeholder={t("search")}
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>

          {/* Mobile Language Toggle */}
          <div className="mobile-lang">
            <LanguageToggle />
          </div>
        </nav>

        {/* Desktop Search */}
        <div className="nav-search">
          <div className="search-icon" onClick={() => setIsOpen(!isOpen)}>
            <FaSearch size={15} />
          </div>

          <input
            type="text"
            value={search}
            placeholder={t("search")}
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

        {/* Desktop Language Toggle */}
        <div className="desktop-lang">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
