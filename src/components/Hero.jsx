import React from "react";

export default function Hero({ search, setSearch }) {
  return (
    <section style={{ background: "rgba(18,122,58,0.08)", padding: "40px 0" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "#127a3a", marginBottom: 10 }}>
          Welcome to Sooraj Crop Sciences
        </h2>
        <p style={{ color: "#555", marginBottom: 20 }}>
          Search our agricultural products
        </p>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          style={{
            padding: "10px 16px",
            width: "80%",
            maxWidth: "400px",
            border: "1px solid #ccc",
            borderRadius: 8,
          }}
        />
      </div>
    </section>
  );
}
