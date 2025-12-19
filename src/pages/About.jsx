import React, { useEffect } from "react";
import aboutBanner from "../assets/about-banner.jpg";
import aboutSideImage from "../assets/about-side.jpg";

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
          }
        });
      },
      { threshold: 0.15 }
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
            display: "block",
          }}
        />
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section style={{ padding: "80px 10% 50px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div className="slide-left">
            <h2 style={{ color: "#127a3a", fontSize: "2.4rem", marginBottom: 22 }}>
              Who We Are
            </h2>

            <p style={{ lineHeight: 1.9, marginBottom: 14 }}>
              Sooraj Crop Sciences is a modern agricultural enterprise committed
              to empowering farmers across Pakistan through innovation, science,
              and trusted partnerships.
            </p>

            <p style={{ lineHeight: 1.9, marginBottom: 18 }}>
              We deliver globally sourced crop solutions, expert field advisory,
              and dealer-focused support systems that enhance productivity,
              protect yields, and promote sustainable farming practices.
            </p>

            <p style={{ fontWeight: 600, color: "#127a3a" }}>
              Rooted in trust. Driven by innovation. Focused on farmers.
            </p>
          </div>

          <div className="slide-right">
            <img
              src={aboutSideImage}
              alt="Agricultural Support"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                boxShadow: "0 25px 55px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section style={{ padding: "40px 12% 70px", background: "#f3fbff" }}>
        <div
          className="slide-left"
          style={{
            background: "#e7f4ee",
            padding: 34,
            borderRadius: 16,
            maxWidth: 760,
            marginBottom: 32,
          }}
        >
          <h2 style={{ color: "#127a3a", fontSize: "2rem", marginBottom: 14 }}>
            Our Mission
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            To deliver innovative, globally sourced crop solutions backed by
            expert advisory, digital tools, and farmer education—enhancing
            productivity, profitability, and sustainability.
          </p>
        </div>

        <div
          className="slide-right"
          style={{
            background: "#0b3a2a",
            color: "#fff",
            padding: 34,
            borderRadius: 16,
            maxWidth: 760,
            marginLeft: "auto",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: 14 }}>
            Our Vision
          </h2>
          <p style={{ lineHeight: 1.75 }}>
            To transform Pakistan’s agriculture through a unified digital-agri
            ecosystem that improves yields, strengthens food security, and drives
            long-term rural prosperity.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section style={{ padding: "80px 10%", textAlign: "center" }}>
        <h2 style={{ color: "#127a3a", fontSize: "2.3rem", marginBottom: 50 }}>
          The Services We Provide
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 28,
          }}
        >
          {services.map((s, i) => (
            <div key={i} className="service-box fade-up">
              {s.icon}
              <h4>{s.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DEALER CTA ================= */}
      <section
        style={{
          background: "#1f9d55",
          color: "#fff",
          padding: "55px 10%",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: 14 }}>
          Want to Become a Dealer?
        </h2>
        <p style={{ maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.7 }}>
          Join our growing nationwide dealer network and partner with a company
          committed to quality, innovation, and long-term success.
        </p>
        <button
          style={{
            background: "#fff",
            color: "#127a3a",
            border: "none",
            padding: "12px 30px",
            borderRadius: 28,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Become a Dealer
        </button>
      </section>

      {/* ================= ANIMATIONS & HOVER ================= */}
      <style>{`
        .fade-up,
        .slide-left,
        .slide-right {
          opacity: 0;
          transition: all 0.8s ease;
        }

        .fade-up { transform: translateY(40px); }
        .slide-left { transform: translateX(-60px); }
        .slide-right { transform: translateX(60px); }

        .fade-up.show,
        .slide-left.show,
        .slide-right.show {
          opacity: 1;
          transform: none;
        }

        .service-box {
          background: #f0faf4;
          padding: 34px 24px;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 22px 45px rgba(0,0,0,0.12);
        }

        .service-box h4 {
          margin-top: 16px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .service-box svg {
          width: 40px;
          height: 40px;
          stroke: #127a3a;
          fill: none;
          stroke-width: 1.8;
        }

        @media (max-width: 900px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "Products",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l4 4-4 4-4-4z" />
        <path d="M2 12l4-4 4 4-4 4z" />
        <path d="M12 14l4-4 4 4-4 4z" />
      </svg>
    ),
  },
  {
    title: "Field Advisory Services",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    ),
  },
  {
    title: "Dealer Business Consultancy",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 8h10M7 12h6" />
      </svg>
    ),
  },
  {
    title: "Household Solutions",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12l9-9 9 9" />
        <path d="M9 21V9h6v12" />
      </svg>
    ),
  },
];
