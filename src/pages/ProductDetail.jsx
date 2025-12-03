import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "../styles/productDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)}>Back to Products</button>

      <h1>{product.name}</h1>

      {/* === TOP SECTION: IMAGE LEFT + INFO RIGHT === */}
      <div className="product-top-section">
        {/* LEFT: PRODUCT IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />

        {/* RIGHT: BASIC INFO */}
        <div className="product-basic-info">
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Pack Size:</strong> {product.packSize}
          </p>

          <h2>Composition / Ingredients</h2>
          <ul>
            {product.composition?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>Crops / Targeted Plants</h2>
          <p>{product.crops}</p>
        </div>
      </div>

      {/* === REST OF THE DETAILS BELOW === */}

      <h2>Usage Instructions</h2>
      <p>{product.usage}</p>

      <h2>Season / Timing</h2>
      <p>{product.season}</p>

      <h2>Pest / Problem Control</h2>
      <p>{product.problems}</p>
    </div>
  );
}