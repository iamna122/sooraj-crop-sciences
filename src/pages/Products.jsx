import React, { useState } from "react";
import products from "../data/products";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/products.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Products() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const lang = i18n.language === "ur" ? "ur" : "en";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProduct, setExpandedProduct] = useState(null);

  // FINAL FIXED CATEGORY LIST (NO DUPLICATES + TRANSLATIONS)
  const categories = [
    t("product.all", "All"),
    ...new Set([
      ...products.map((p) => p.category?.[lang] || p.category?.en || "Unknown"),
      // t("product.herbicide", "Herbicide"),
      //t("product.fertilizer", "Fertilizer"),
    ]),
  ];

  const filteredProducts =
    selectedCategory === t("product.all", "All")
      ? products
      : products.filter((p) => {
          const cat = p.category?.[lang] || p.category?.en;
          return (
            cat &&
            cat.toString().toLowerCase() === selectedCategory.toLowerCase()
          );
        });

  const toggleDetails = (id) => {
    setExpandedProduct(expandedProduct === id ? null : id);
  };

  return (
    <div className="products-container">
      <h1 className="page-title">{t("product.title") || "Products"}</h1>

      {/* CATEGORY BUTTONS */}
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {filteredProducts.map((p) => {
          const isExpanded = expandedProduct === p.id;

          return (
            <motion.div
              key={p.id}
              className="product-card"
              onClick={() => navigate(`/products/${p.id}`)}
              style={{ cursor: "pointer" }}
            >
              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.name?.[lang] || p.name?.en}
                className="product-image"
              />

              {/* NAME */}
              <h3 className="product-name">{p.name?.[lang] || p.name?.en}</h3>

              {/* BASIC INFO */}
              <div className="product-info">
                <p>
                  <strong>{t("product.brand", "Brand")}:</strong>{" "}
                  {p.brand?.[lang] || p.brand?.en}
                </p>
                <p>
                  <strong>{t("product.pack", "Pack Size")}:</strong>{" "}
                  {p.packSize?.[lang] || p.packSize?.en}
                </p>
              </div>

              {/* READ MORE / HIDE DETAILS BUTTON */}
              <button
                className="read-more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDetails(p.id);
                }}
              >
                {isExpanded
                  ? t("product.hideDetails", "Hide Details")
                  : t("product.readMore", "Read more")}
              </button>

              {/* DETAILS PREVIEW */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.ul
                    className="product-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {p.details?.[lang]?.length > 0 ? (
                      p.details[lang].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>{t("product.noDetails", "No details available")}</li>
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
