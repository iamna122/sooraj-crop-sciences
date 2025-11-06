import React from "react";

export default function ProductCard({ product }) {
  return (
    <article
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        textAlign: "center",
        background: "#fff",
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
      <button
        onClick={() => alert(`Product enquiry: ${product.name}`)}
        style={{
          background: "#2e7c4cff",
          color: "white",
          padding: "8px 14px",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        More Details
      </button>
    </article>
  );
}
