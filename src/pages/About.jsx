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

      {/* ================= HERO ================= */}
      <section style={{ height: "80vh", overflow: "hidden" }}>
        <img
          src={aboutBanner}
          alt="Sooraj Crop Sciences"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
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
          empowering farmers across Pakistan through innovation, expert guidance,
          and a strong nationwide dealer network.
        </p>

        <p style={{ marginTop: 26, fontWeight: 600, color: "#127a3a" }}>
          Rooted in trust. Driven by innovation. Focused on farmers.
        </p>

        <p style={{ marginTop: 8, fontWeight: 600 }}>
          کسان کی ترقی، پاکستان کی خوشحالی
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section style={{ padding: "30px 12% 40px", background: "#f3fbff" }}>

        <div className="slide-left mission-box">
          <h2>Our Mission</h2>
          <p>
            To deliver innovative, globally sourced crop solutions supported by
            advisory services, digital tools, and farmer education—enhancing
            productivity and sustainability.
          </p>
        </div>

        <div className="slide-right vision-box">
          <h2>Our Vision</h2>
          <p>
            To transform Pakistan’s agriculture through a unified digital-agri
            platform delivering quality inputs, expert guidance, and sustainable
            growth.
          </p>
        </div>

        {/* ================= SERVICES (MOVED HERE) ================= */}
        <div className="fade-up services-wrapper">
          <h2 className="services-title">The Services We Provide</h2>

          <div className="services-grid">

            <div className="service-card s1">
              <div className="icon">⬛</div>
              <h3>Products</h3>
              <p>
                High-quality crop protection and nutrition products to improve
                yields and safeguard crops.
              </p>
            </div>

            <div className="service-card s2">
              <div className="icon">⬜</div>
              <h3>Field Advisory Services</h3>
              <p>
                Professional on-ground and digital advisory helping farmers make
                informed decisions.
              </p>
            </div>

            <div className="service-card s3">
              <div className="icon">▣</div>
              <h3>Business Consultancy</h3>
              <p>
                Strategic guidance for dealers covering planning, growth, and
                operational efficiency.
              </p>
            </div>

            <div className="service-card s4">
              <div className="icon">▢</div>
              <h3>Household Services</h3>
              <p>
                Safe and effective household solutions focused on hygiene and
                protection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-strip">
        <h2>Become a Dealer</h2>
        <p>
          Partner with Sooraj Crop Sciences and grow with a trusted agricultural brand.
        </p>
        <button>Join Our Network</button>
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

        .slide-left, .slide-right {
          opacity: 0;
          transition: all 0.9s ease;
          max-width: 760px;
          padding: 34px;
          border-radius: 18px;
          margin-bottom: 34px;
        }

        .slide-left { transform: translateX(-60px); }
        .slide-right { transform: translateX(60px); margin-left: auto; }

        .slide-left.show, .slide-right.show {
          opacity: 1;
          transform: translateX(0);
        }

        .mission-box {
          background: #e7f4ee;
        }

        .vision-box {
          background: #0b3a2a;
          color: #fff;
        }

        .services-wrapper {
          margin-top: 20px;
        }

        .services-title {
          text-align: center;
          color: #127a3a;
          font-size: 2.2rem;
          margin-bottom: 40px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 26px;
        }

        .service-card {
          padding: 28px 24px;
          border-radius: 16px;
          transition: all 0.35s ease;
          box-shadow: 0 14px 32px rgba(0,0,0,0.08);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 48px rgba(0,0,0,0.14);
        }

        .icon {
          font-size: 1.6rem;
          margin-bottom: 10px;
        }

        .service-card h3 {
          margin-bottom: 10px;
          color: #127a3a;
        }

        /* Progressive green shades */
        .s1 { background: #edf8f1; }
        .s2 { background: #e0f2e8; }
        .s3 { background: #cfe8da; }
        .s4 { background: #b8dbc8; }

        .cta-strip {
          background: linear-gradient(135deg, #127a3a, #1f9d55);
          color: #fff;
          text-align: center;
          padding: 70px 12%;
        }

        .cta-strip h2 {
          font-size: 2.4rem;
          margin-bottom: 14px;
        }

        .cta-strip button {
          margin-top: 24px;
          padding: 14px 36px;
          border-radius: 30px;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          background: #fff;
          color: #127a3a;
          cursor: pointer;
        }

        .cta-strip button:hover {
          background: #f1f1f1;
        }
      `}</style>
    </div>
  );
}
