import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        textAlign: "center",
        background: "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: 8, marginBottom: 10 }}
      />
      <h3 style={{ color: "#127a3a", marginBottom: 4 }}>{product.name}</h3>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 10 }}>
        {product.short}
      </p>

      {/* 👇 More Details Button */}
      <button
        onClick={() => setShowDetails((prev) => !prev)}
        style={{
          background: "#2e7c4cff",
          color: "white",
          padding: "8px 14px",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: "14px",
          transition: "background 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#1d5633")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#2e7c4cff")}
      >
        {showDetails ? "Hide Details" : "More Details"}
      </button>

      {/* 👇 Expanding Text */}
      <div
        style={{
          maxHeight: showDetails ? "150px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.4s ease",
          opacity: showDetails ? 1 : 0,
          marginTop: showDetails ? "10px" : "0px",
        }}
      >
        <p
          style={{
            color: "#444",
            fontSize: "13px",
            lineHeight: "1.5",
            textAlign: "left",
          }}
        >
          {product.details
            ? product.details
            : "This product enhances crop growth and improves soil fertility with essential nutrients. Ideal for various field conditions."}
        </p>
      </div>
    </article>
  );
}
