import React, { useEffect } from "react";
import aboutBanner from "../assets/about-banner.jpg";

export default function About() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937" }}>
      
    {/* ================= HERO BANNER ================= */}
<section
  style={{
    height: "80vh", // slightly taller banner
    width: "100%",
    overflow: "hidden",
  }}
>
  <img
    src={aboutBanner}
    alt="Sooraj Crop Sciences Banner"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top", // ✅ bottom stays, crop from top
      display: "block",
    }}
  />
</section>





      {/* ================= WHO WE ARE ================= */}
      <section
        className="fade-up"
        style={{ padding: "90px 12%", textAlign: "center" }}
      >
        <h2 style={{ color: "#127a3a", fontSize: "2.4rem", marginBottom: 24 }}>
          Who We Are
        </h2>
        <p style={{ maxWidth: 820, margin: "auto", lineHeight: 1.9 }}>
          Sooraj Crop Sciences is a forward-looking agricultural company dedicated
          to strengthening Pakistan’s farming ecosystem through innovation,
          quality crop solutions, and a strong nationwide presence.
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section style={{ background: "#f4faf6", padding: "90px 12%" }}>
        <div
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          }}
        >
          <div className="fade-up" style={cardStyle}>
            <h3 style={cardTitle}>🌱 Our Mission</h3>
            <p>
              To deliver high-quality crop solutions backed by expert advisory,
              farmer education, and sustainable practices.
            </p>
          </div>

          <div className="fade-up" style={cardStyle}>
            <h3 style={cardTitle}>🌾 Our Vision</h3>
            <p>
              To build a unified digital agriculture ecosystem that empowers
              farmers, improves yields, and strengthens food security.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section
        className="fade-up"
        style={{ padding: "90px 12%", textAlign: "center" }}
      >
        <h2 style={{ color: "#127a3a", fontSize: "2.4rem", marginBottom: 30 }}>
          Our Core Values
        </h2>
        <div
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          }}
        >
          {[
            "Integrity & Trust",
            "Farmer First",
            "Innovation",
            "Sustainability",
            "Nationwide Impact",
          ].map(v => (
            <div key={v} style={valueStyle}>
              {v}
            </div>
          ))}
        </div>
      </section>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

/* ================= STYLES ================= */
const cardStyle = {
  background: "#fff",
  padding: 40,
  borderRadius: 18,
  boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
};

const cardTitle = {
  color: "#127a3a",
  fontSize: "1.6rem",
  marginBottom: 16,
};

const valueStyle = {
  background: "#fff",
  padding: 18,
  borderRadius: 12,
  fontWeight: 600,
  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
};
