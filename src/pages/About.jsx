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
      <section className="hero-banner">
        <img
          src={aboutBanner}
          alt="Sooraj Crop Sciences Banner"
          className="hero-image"
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

        <p
          style={{
            maxWidth: 900,
            margin: "auto",
            lineHeight: 1.9,
            fontSize: "1.05rem",
          }}
        >
          Sooraj Crop Sciences is a modern agricultural enterprise committed to
          empowering farmers across Pakistan. We combine innovative crop
          solutions, expert guidance, and a strong nationwide network to help
          growers improve productivity, protect yields, and adopt sustainable
          farming practices.
        </p>

        <p
          style={{
            marginTop: 26,
            fontWeight: 600,
            color: "#127a3a",
            fontSize: "1.05rem",
          }}
        >
          Rooted in trust. Driven by innovation. Focused on farmers.
        </p>

        {/* Urdu tagline */}
        <p
          style={{
            marginTop: 14,
            fontSize: "1.15rem",
            fontWeight: 600,
          }}
        >
          کسانوں کے لیے، ترقی کے لیے
        </p>
      </section>

      {/* ================= STATS ================= */}
      <section
        className="fade-up"
        style={{
          padding: "70px 12%",
          background: "#f4faf6",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: 40,
          textAlign: "center",
        }}
      >
        <Stat number="15+" label="Years of Excellence" />
        <Stat number="250+" label="Authorized Dealers" />
        <Stat number="Nationwide" label="Coverage Across Pakistan" />
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section
        className="fade-up"
        style={{
          padding: "100px 12%",
          background: "#f3fbff",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Mission */}
          <div>
            <h2
              style={{
                fontSize: "2.2rem",
                color: "#127a3a",
                marginBottom: 20,
              }}
            >
              Our Mission
            </h2>

            <p style={{ lineHeight: 1.9, marginBottom: 22 }}>
              Our mission is to support farmers with reliable, science-backed
              crop solutions that enhance productivity and protect crops
              throughout the growing cycle.
            </p>

            <p style={{ lineHeight: 1.9 }}>
              Through research, strong dealer partnerships, and farmer education,
              we aim to strengthen Pakistan’s agricultural foundation and promote
              sustainable farming practices.
            </p>
          </div>

          {/* Vision Card */}
          <div
            style={{
              background: "#0b3a2a",
              color: "#fff",
              padding: "50px 45px",
              borderRadius: 20,
              boxShadow: "0 30px 60px rgba(0,0,0,0.18)",
            }}
          >
            <h3 style={{ fontSize: "1.9rem", marginBottom: 18 }}>
              Our Vision
            </h3>

            <p style={{ lineHeight: 1.8, marginBottom: 30 }}>
              To become a trusted national leader in agricultural innovation by
              delivering advanced crop solutions that empower farmers, improve
              yields, and ensure long-term food security.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Pill text="Farmer Empowerment" />
              <Pill text="Innovation" />
              <Pill text="Sustainability" />
            </div>
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

      {/* ================= STYLES ================= */}
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

        .hero-banner {
          height: 80vh;
          width: 100%;
          overflow: hidden;
          opacity: 0;
          animation: heroFade 1.2s ease forwards;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transform: scale(1.06);
          animation: heroZoom 1.6s ease forwards;
        }

        @keyframes heroFade {
          to { opacity: 1; }
        }

        @keyframes heroZoom {
          to { transform: scale(1); }
        }

        @media (max-width: 900px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
          .hero-banner {
            height: 55vh;
          }
        }
      `}</style>
    </div>
  );
}

/* ================= HELPERS ================= */

function Stat({ number, label }) {
  return (
    <div>
      <h3 style={{ fontSize: "2.4rem", color: "#127a3a", marginBottom: 8 }}>
        {number}
      </h3>
      <p style={{ fontWeight: 600 }}>{label}</p>
    </div>
  );
}

function Pill({ text }) {
  return (
    <span
      style={{
        border: "1px solid rgba(255,255,255,0.4)",
        padding: "8px 16px",
        borderRadius: 30,
        fontSize: "0.9rem",
      }}
    >
      {text}
    </span>
  );
}

const valueStyle = {
  background: "#fff",
  padding: 18,
  borderRadius: 12,
  fontWeight: 600,
  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
};
