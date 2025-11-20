import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/sooraj-logo.PNG";
import products from "../data/products";

export default function Navbar({ search, setSearch }) {
  const location = useLocation();
  const pages = ["Home", "About", "Products", "Contact", "FAQs"];
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearchChange = (value) => {
    setSearch(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <header
      style={{
        width: "100%",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Container to match TopHeader width */}
      <div
        style={{
          maxWidth: "1250px", // same as TopHeader
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          padding: "16px 20px", // adjust horizontal padding to match TopHeader
          gap: "30px",
        }}
      >
        {/* LEFT — Logo + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="Sooraj Logo"
            style={{ height: "50px", width: "auto", objectFit: "contain" }}
          />
          <h1
            style={{
              color: "#127a3a",
              fontSize: "1.5rem",
              fontWeight: 800,
              whiteSpace: "nowrap",
            }}
          >
            Sooraj Crop Sciences
          </h1>
        </div>

        {/* CENTER — Nav Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            marginLeft: "auto",
          }}
        >
          {pages.map((page) => {
            const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={page}
                to={path}
                style={{
                  textDecoration: "none",
                  fontSize: "1.12rem",
                  fontWeight: 600,
                  color: "#127a3a",
                  paddingBottom: "6px",
                  borderBottom: isActive
                    ? "3px solid #127a3a"
                    : "3px solid transparent",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.color = "#0d5a2a";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.color = "#127a3a";
                }}
              >
                {page}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT — Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginLeft: "10px",
          }}
        >
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            style={{
              background: "#127a3a",
              color: "#fff",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <FaSearch size={15} color="white" />
          </div>
          <input
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={(e) => handleSearchChange(e.target.value)}
            style={{
              width: isOpen ? "220px" : "0px",
              opacity: isOpen ? 1 : 0,
              padding: isOpen ? "8px 12px" : "0px",
              marginLeft: "10px",
              borderRadius: "6px",
              border: isOpen ? "1px solid #bbb" : "none",
              fontSize: "0.95rem",
              transition: "all 0.35s ease",
              outline: "none",
              background: "#fff",
            }}
          />
          {isOpen && results.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "50px",
                right: 0,
                width: "240px",
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
                padding: "10px 0",
                zIndex: 2000,
              }}
            >
              {results.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.id}`}
                  style={{
                    display: "block",
                    padding: "10px 15px",
                    fontSize: "0.95rem",
                    color: "#127a3a",
                    textDecoration: "none",
                    transition: "0.25s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "rgba(18,122,58,0.07)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "transparent")
                  }
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
