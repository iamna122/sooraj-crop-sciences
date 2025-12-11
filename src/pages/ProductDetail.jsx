import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "../styles/productDetail.css";
import { useTranslation } from "react-i18next";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const lang = i18n.language === "ur" ? "ur" : "en";

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>{t("product.notFound") || "Product not found"}</p>;
  }

  return (
    <div
      className={`product-detail-container ${lang === "ur" ? "rtl" : "ltr"}`}
    >
      {/* Back Button */}
      <button onClick={() => navigate(-1)}>
        {t("product.back") || "Back"}
      </button>

      {/* Product Name */}
      <h1>{product.name?.[lang] || product.name?.en}</h1>

      {/* Top Section */}
      <div className="product-top-section">
        <img
          src={product.image}
          alt={product.name?.[lang] || product.name?.en}
          className="product-detail-image"
        />

        <div className="product-basic-info">
          {product.brand && (
            <p>
              <strong>{t("product.brand") || "Brand"}:</strong>{" "}
              {product.brand?.[lang] || product.brand?.en}
            </p>
          )}

          {product.packSize && (
            <p>
              <strong>{t("product.pack") || "Pack Size"}:</strong>{" "}
              {product.packSize?.[lang] || product.packSize?.en}
            </p>
          )}

          {/* CATEGORY (Heading name changed as requested) */}
          {product.category && (
            <p>
              <strong>Product Type:</strong>{" "}
              {product.category?.[lang] || product.category?.en}
            </p>
          )}
        </div>
      </div>

      {/* Composition */}
      {product.composition?.length > 0 && (
        <>
          <h2>{t("product.composition") || "Composition"}</h2>
          <ul>
            {product.composition.map((item, index) => (
              <li key={index}>{item?.[lang] || item?.en}</li>
            ))}
          </ul>
        </>
      )}

      {/* Crops */}
      {product.crops && (
        <>
          <h2>{t("product.crops") || "Crops"}</h2>
          <p>{product.crops?.[lang] || product.crops?.en}</p>
        </>
      )}

      {/* Usage */}
      {product.usage && (
        <>
          <h2>{t("product.usage") || "Usage"}</h2>
          {Array.isArray(product.usage?.[lang]) ? (
            <ol>
              {product.usage[lang].map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          ) : (
            <p>{product.usage?.[lang] || product.usage?.en}</p>
          )}
        </>
      )}

      {/* Season */}
      {product.season && (
        <>
          <h2>{t("product.season") || "Season"}</h2>
          <p>{product.season?.[lang] || product.season?.en}</p>
        </>
      )}

      {/* Problems */}
      {product.problems && (
        <>
          <h2>{t("product.problems") || "Problems"}</h2>
          <p>{product.problems?.[lang] || product.problems?.en}</p>
        </>
      )}

      {/* REMOVED product.details */}
    </div>
  );
}
