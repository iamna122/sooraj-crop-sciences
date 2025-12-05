import React, { useState } from "react";
import products from "../data/products";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/products.css";
import { useTranslation } from "react-i18next";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const lang = i18n.language; // ✅ current language (en / ur)

  // ✅ Categories must also be language-safe
  const categories = [
    "All",
    ...new Set(products.map((p) => p.category[lang])),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category[lang] === selectedCategory);

  const openProductPage = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="products-container">
      {/* ✅ Page Title Translated */}
      <h1 className="page-title">{t("products.title")}</h1>

      {/* ✅ Category Buttons */}
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

      {/* ✅ Product Grid */}
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
              alt={p.name[lang]}   // ✅ FIXED
              className="product-image"
              layout
            />

            {/* ✅ FIXED BILINGUAL NAME */}
            <h3 className="product-name">{p.name[lang]}</h3>

            <div className="product-info">
              <p className="product-brand">
                <strong>{t("product.brand")}:</strong> {p.brand[lang]}
              </p>

              <p className="product-pack">
                <strong>{t("product.pack")}:</strong> {p.packSize[lang]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
