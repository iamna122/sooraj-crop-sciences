import React, { useState } from "react";
import products from "../data/products";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/products.css";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProduct, setExpandedProduct] = useState(null);

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const toggleDetails = (id) => {
    setExpandedProduct(expandedProduct === id ? null : id);
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
        {filteredProducts.map((p) => {
          const isExpanded = expandedProduct === p.id;

          return (
            <motion.div
              key={p.id}
              className="product-card"
              layout // only on the card itself
              transition={{ layout: { duration: 0.4, type: "spring" } }}
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

              <button
                className="read-more-btn"
                onClick={() => toggleDetails(p.id)}
              >
                {isExpanded ? "Hide Details" : "Read More"}
              </button>

              {/* Only this card expands */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.ul
                    className="product-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {p.details && p.details.length > 0 ? (
                      p.details.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>No additional details available.</li>
                    )}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
