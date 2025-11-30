import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import StatsSection from "../components/StatsSection";
import mainBanner from "../assets/main-banner.jpg";
import VideoSection from "../components/VideoSection";
// import "../styles/Home.css";

import products from "../data/products";

export default function Home({ search, setSearch }) {
  // Select the first 8 featured products
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          // overflow: "hidden",
        }}
      >
        <img
          src={mainBanner}
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            // objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(100%)", // cinematic dark overlay
          }}
        />
      </div>

      <Hero search={search} setSearch={setSearch} />

      <VideoSection/>

      <StatsSection />

      {/* FEATURED PRODUCTS */}
      <section
        style={{
          padding: "20px 0",
          width: "85%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#127a3a",
            marginBottom: "25px",
            fontSize: "1.6rem",
            fontWeight: "700",
            letterSpacing: "0.5px",
          }}
        >
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          {featuredProducts.slice(0, 4).map((p) => (
            <div
              key={p.id}
              style={{
                background: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                padding: "14px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
              }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div style={{ marginTop: "30px" }}>
          <a
            href="/products"
            style={{
              background: "#127a3a",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0e6230")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#127a3a")}
          >
            View All Products
          </a>
        </div>
      </section>
    </div>
  );
}
