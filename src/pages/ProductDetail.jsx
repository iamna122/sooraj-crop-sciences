import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "../styles/productDetail.css";
import { useTranslation } from "react-i18next";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const lang = i18n.language;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>{t("product.notFound")}</p>;

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)}>{t("product.back")}</button>

      <h1>{product.name[lang]}</h1>

      {/* Top Section */}
      <div className="product-top-section">
        <img
          src={product.image}
          alt={product.name[lang]}
          className="product-detail-image"
        />

        <div className="product-basic-info">
          <p>
            <strong>{t("product.brand")}:</strong> {product.brand[lang]}
          </p>
          <p>
            <strong>{t("product.pack")}:</strong> {product.packSize[lang]}
          </p>

          {product.composition && (
            <>
              <h2>{t("product.composition")}</h2>
              <ul>
                {product.composition.map((item, index) => (
                  <li key={index}>{item[lang]}</li>
                ))}
              </ul>
            </>
          )}

          {product.crops && (
            <>
              <h2>{t("product.crops")}</h2>
              <p>{product.crops[lang]}</p>
            </>
          )}
        </div>
      </div>

      {product.usage && (
        <>
          <h2>{t("product.usage")}</h2>
          <p>{product.usage[lang]}</p>
        </>
      )}

      {product.season && (
        <>
          <h2>{t("product.season")}</h2>
          <p>{product.season[lang]}</p>
        </>
      )}

      {product.problems && (
        <>
          <h2>{t("product.problems")}</h2>
          <p>{product.problems[lang]}</p>
        </>
      )}
    </div>
  );
}
