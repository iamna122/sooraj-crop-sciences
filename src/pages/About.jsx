import React, { useEffect } from "react";
import aboutBanner from "../assets/about-banner.jpg";

export default function About() {
  useEffect(() => {
    const items = document.querySelectorAll(
      ".fade-up, .slide-left, .slide-right"
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937" }}>
      
      {/* ================= HERO BANNER ================= */}
      <section style={{ height: "80vh", overflow: "hidden" }}>
        <img
          src={aboutBanner}
          alt="Sooraj Crop Sciences"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="fade-up" style={{ padding: "90px 12% 40px", textAlign: "center" }}>
        <h2 style={{ color: "#127a3a", fontSize: "2.4rem", marginBottom: 24 }}>
          Who We Are
        </h2>

        <p style={{ maxWidth: 900, margin: "auto", lineHeight: 1.9 }}>
          Sooraj Crop Sciences is a modern agricultural enterprise committed to
          empowering farmers across Pakistan. We combine innovative crop
          solutions, expert guidance, and a strong nationwide network to help
          growers improve productivity, protect yields, and adopt sustainable
          farming practices.
        </p>

        <p style={{ marginTop: 26, fontWeight: 600, color: "#127a3a" }}>
          Rooted in trust. Driven by innovation. Focused on farmers.
        </p>

        <p style={{ marginTop: 10, fontWeight: 600 }}>
          کسان کی ترقی، پاکستان کی خوشحالی
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section style={{ padding: "30px 12% 80px", background: "#f3fbff" }}>
        
        {/* Mission */}
        <div
          className="slide-left"
          style={{
            background: "#e7f4ee",
            padding: "36px 34px",
            borderRadius: 18,
            maxWidth: 780,
            marginBottom: 50,
            boxShadow: "0 18px 40px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#127a3a", fontSize: "2rem" }}>
            Our Mission
          </h2>

          <p style={{ lineHeight: 1.85 }}>
            To deliver innovative, globally sourced crop solutions backed by
            expert advisory, digital tools, and farmer education — building
            sustainable agriculture for national uplift.
          </p>
        </div>

        {/* Vision */}
        <div
          className="slide-right"
          style={{
            background: "#0b3a2a",
            color: "#fff",
            padding: "36px 34px",
            borderRadius: 18,
            maxWidth: 780,
            marginLeft: "auto",
            boxShadow: "0 20px 45px rgba(0,0,0,0.16)",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>Our Vision</h2>

          <p style={{ lineHeight: 1.75 }}>
            To transform Pakistan’s agriculture through a unified digital-agri
            platform delivering global-quality inputs, expert guidance, and
            sustainable solutions.
          </p>
        </div>
      </section>

      {/* ================= CSS ================= */}
      <style>
        {`
          .fade-up {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease;
          }
          .fade-up.show {
            opacity: 1;
            transform: translateY(0);
          }

          .slide-left,
          .slide-right {
            opacity: 0;
            transition: all 0.9s ease;
          }

          .slide-left {
            transform: translateX(-60px);
          }

          .slide-right {
            transform: translateX(60px);
          }

          .slide-left.show,
          .slide-right.show {
            opacity: 1;
            transform: translateX(0);
          }
        `}
      </style>
    </div>
  );
}
