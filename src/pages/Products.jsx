import React, { useState } from "react";
import products from "../data/products";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/products.css";
import { Link } from "react-router-dom";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const openProductPage = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="products-container">
      <h1 className="page-title">Our Products</h1>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((p) => (
          <motion.div
            key={p.id}
            className="product-card"
            layout
            transition={{ layout: { duration: 0.4, type: "spring" } }}
            onClick={() => openProductPage(p.id)}
            style={{ cursor: "pointer" }}
          >
            <motion.img
              src={p.image}
              alt={p.name}
              className="product-image"
              layout
            />
            <h3 className="product-name">{p.name}</h3>
            <div className="product-info">
              <p className="product-brand">
                <strong>Brand:</strong> {p.brand}
              </p>
              <p className="product-pack">
                <strong>Pack Size:</strong> {p.packSize}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}