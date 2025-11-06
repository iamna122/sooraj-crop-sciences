import React, { useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Hero search={search} setSearch={setSearch} />

      <section style={{ padding: "40px 0", width: "80%", margin: "0 auto" }}>
        <h2 style={{ color: "#127a3a", marginBottom: 20 }}>
          Featured Products
        </h2>

        {filtered.length === 0 ? (
          <p style={{ color: "#666" }}>No products found.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
