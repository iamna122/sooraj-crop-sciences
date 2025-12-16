import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "../styles/productDetail.css";
import { useTranslation } from "react-i18next";
import agrimoreLogo from "../assets/suppliers/Agrimore.jpeg";
import nafeesLogo from "../assets/suppliers/nafees.jpeg";

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
    <>
      {/* MAIN CONTAINER */}
      <div className="pd-container">
        {/* BACK BUTTON */}
        <button className="pd-back" onClick={() => navigate(-1)}>
          Back to Products
        </button>

        {/* PRODUCT NAME */}
        <h1 className="pd-title">{product.name?.[lang] || product.name?.en}</h1>

        {/* TOP TWO COLUMN SECTION */}
        <div className="pd-top">
          {/* LEFT: IMAGE */}
          <div className="pd-image-wrapper">
            <img
              src={product.image}
              alt={product.name?.[lang] || product.name?.en}
              className="pd-image"
            />
          </div>

          {/* RIGHT: PRODUCT INFO */}
          <div className="pd-info">
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

            {product.category && (
              <p>
                <strong>Product Type:</strong>{" "}
                {product.category?.[lang] || product.category?.en}
              </p>
            )}

            {/* INGREDIENTS / COMPOSITION */}
            {product.composition?.length > 0 && (
              <>
                <h3>
                  {t("product.composition") || "Ingredients / Composition"}
                </h3>
                <ul>
                  {product.composition.map((item, idx) => (
                    <li key={idx}>{item?.[lang] || item?.en}</li>
                  ))}
                </ul>
              </>
            )}

            {/* CROPS / TARGETED PLANTS */}
            {product.crops && (
              <>
                <h3>{t("product.crops") || "Crops / Targeted Plants"}</h3>
                <p>{product.crops?.[lang] || product.crops?.en}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FULL WIDTH GREEN SECTION */}
      <section className="pd-green-section">
        <div className="pd-green-content">
          {/* USAGE */}
          {product.usage && (
            <>
              <h2>{t("product.usage") || "Usage Instructions"}</h2>
              {Array.isArray(product.usage?.[lang]) ? (
                <ul>
                  {product.usage[lang].map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              ) : (
                <p>{product.usage?.[lang] || product.usage?.en}</p>
              )}
            </>
          )}

          {/* SEASON */}
          {product.season && (
            <>
              <h2>{t("product.season") || "Season / Timing"}</h2>
              <p>{product.season?.[lang] || product.season?.en}</p>
            </>
          )}

          {/* PROBLEMS */}
          {product.problems && (
            <>
              <h2>{t("product.problems") || "Pest / Problem Control"}</h2>
              <p>{product.problems?.[lang] || product.problems?.en}</p>
            </>
          )}
        </div>
      </section>

      {/* SUPPLIER LOGO STRIP */}
      <div className="pd-logo-strip">
        <div className="pd-logo-track">
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />

          {/* duplicate for seamless loop */}
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />
          <img src={agrimoreLogo} alt="Agrimore" />
          <img src={nafeesLogo} alt="Nafees" />
        </div>
      </div>
    </>
  );
}
