import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article style={styles.card}>
      {/* Image */}
      <img src={product.image} alt={product.name} style={styles.image} />

      {/* Product Title */}
      <h3 style={styles.title}>{product.name}</h3>

      {/* Short Description */}
      <p style={styles.short}>{product.short}</p>

      {/* Spacer to align all cards equally */}
      <div style={{ flexGrow: 1 }}></div>

      {/* Button */}
      <button
        onClick={() => setShowDetails((prev) => !prev)}
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#1f5e36")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#2e7c4c")}
      >
        {showDetails ? "Hide Details" : "More Details"}
      </button>

      {/* Expandable Details */}
      <div
        style={{
          maxHeight: showDetails ? "160px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.35s ease",
          opacity: showDetails ? 1 : 0,
          marginTop: showDetails ? "10px" : "0px",
        }}
      >
        <p style={styles.details}>
          {product.details
            ? product.details
            : "This product enhances crop growth and improves soil fertility."}
        </p>
      </div>
    </article>
  );
}

const styles = {
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: 18,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%", // ensures equal height in grid
    textAlign: "center",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },

  image: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 12,
    objectFit: "cover",
  },

  title: {
    color: "#127a3a",
    marginBottom: 6,
    fontSize: "1.15rem",
    fontWeight: 700,
    lineHeight: 1.4,
  },

  short: {
    color: "#666",
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 1.4,
  },

  button: {
    background: "#2e7c4c",
    color: "white",
    padding: "9px 16px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    transition: "background 0.25s ease",
  },

  details: {
    color: "#444",
    fontSize: "13px",
    lineHeight: "1.55",
    textAlign: "left",
    paddingTop: "6px",
  },
};
