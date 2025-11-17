import React from "react";

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          height: "380px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1650&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* Soft overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
          }}
        ></div>

        {/* Title */}
        <h1
          style={{
            position: "relative",
            fontSize: "3rem",
            fontWeight: "700",
            letterSpacing: "1px",
            marginBottom: "10px",
          }}
        >
          About Our Company
        </h1>

        {/* Breadcrumb Button */}
        <div
          style={{
            position: "relative",
            background: "rgba(255,255,255,0.2)",
            padding: "10px 20px",
            borderRadius: "8px",
            backdropFilter: "blur(3px)",
            fontSize: "1rem",
          }}
        >
          <a
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Home
          </a>{" "}
          <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>›</span>{" "}
          <span style={{ fontWeight: "600" }}>About Us</span>
        </div>
      </div>

      {/* Company Intro */}
      <section
        style={{
          width: "85%",
          margin: "60px auto",
          textAlign: "center",
          lineHeight: "1.8",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#127a3a",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Who We Are
        </h2>

        <p style={{ fontSize: "1rem", color: "#555" }}>
          Sooraj Crop Sciences is an agricultural solutions company dedicated to
          delivering reliable, research-driven products that empower farmers to
          achieve healthier crops, stronger yields, and long-term sustainability.
          We specialize in <strong>fertilizers, micronutrients, pesticides, and
          fungicides</strong>, offering a complete range of crop protection and
          crop nutrition products trusted by farming communities across the
          region.
        </p>
      </section>

      {/* Mission & Vision */}
      <section
        style={{
          background: "#f5f9f6",
          padding: "60px 0",
        }}
      >
        <div
          style={{
            width: "85%",
            margin: "0 auto",
            display: "grid",
            gap: "25px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
            }}
          >
            <h3
              style={{ color: "#127a3a", fontSize: "1.4rem", marginBottom: "12px" }}
            >
              🌱 Our Mission
            </h3>
            <p style={{ color: "#555" }}>
              To provide innovative and effective agricultural solutions that
              improve crop health, maximize yield, and support sustainable farming
              practices for future generations.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
            }}
          >
            <h3
              style={{ color: "#127a3a", fontSize: "1.4rem", marginBottom: "12px" }}
            >
              🌾 Our Vision
            </h3>
            <p style={{ color: "#555" }}>
              To become a trusted leader in crop sciences by offering science-backed
              products, empowering farmers with knowledge, and contributing to a
              resilient agricultural ecosystem.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
            }}
          >
            <h3
              style={{ color: "#127a3a", fontSize: "1.4rem", marginBottom: "12px" }}
            >
              🛡️ Our Commitment
            </h3>
            <p style={{ color: "#555" }}>
              We are committed to delivering high-quality, environment-friendly, and
              highly effective crop solutions that farmers can trust season after
              season.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          width: "85%",
          margin: "70px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {[
          { number: "10+", label: "Years of Experience" },
          { number: "50+", label: "Premium Products" },
          { number: "500+", label: "Dealers Nationwide" },
          { number: "100k+", label: "Farmers Served" },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              background: "#f5f9f6",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
            }}
          >
            <h2 style={{ color: "#127a3a", fontSize: "2.2rem", margin: 0 }}>
              {stat.number}
            </h2>
            <p style={{ marginTop: "10px", color: "#444" }}>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          background: "#f0f7f2",
          padding: "70px 0",
        }}
      >
        <div style={{ width: "85%", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#127a3a",
              fontSize: "2rem",
              marginBottom: "30px",
              fontWeight: "700",
            }}
          >
            Why Farmers Trust Sooraj Crop Sciences
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gap: "25px",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <li
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              }}
            >
              ✔️ Scientific research-based formulations  
            </li>
            <li
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              }}
            >
              ✔️ Complete crop protection + nutrition  
            </li>
            <li
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              }}
            >
              ✔️ Reliable products trusted by farmers  
            </li>
            <li
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              }}
            >
              ✔️ Dealer network across major agricultural regions  
            </li>
            <li
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              }}
            >
              ✔️ Focus on sustainable and modern farming  
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
