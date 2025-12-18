import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTranslation } from "react-i18next";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function About() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
  }, []);

  const warehouses = [
    {
      lat: 31.5204,
      lng: 74.3587,
      name: "Lahore Warehouse",
      desc: "Serving Punjab with premium crop inputs & advisory."
    },
    {
      lat: 24.8607,
      lng: 67.0011,
      name: "Karachi Warehouse",
      desc: "Supporting Sindh farmers with global-quality solutions."
    },
    {
      lat: 33.6844,
      lng: 73.0479,
      name: "Islamabad Warehouse",
      desc: "Operational hub for Northern Pakistan."
    }
  ];

  return (
    <div
      style={{
        fontFamily:
          lang === "ur"
            ? "Noori Nastaleeq, serif"
            : "'Inter', sans-serif"
      }}
    >
      {/* INLINE CSS */}
      <style>{`
        .mapHero {
          height: 520px;
          position: relative;
        }
        .mapHero .leaflet-container {
          height: 100%;
          width: 100%;
        }
        .mapOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.2));
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          text-align: center;
        }
        .mapOverlay h1 {
          font-size: 3.5rem;
          font-weight: 700;
          animation: fadeDown 1s ease;
        }
        .mapOverlay p {
          font-size: 1.2rem;
          margin-top: 10px;
          animation: fadeUp 1.2s ease;
        }
        section {
          padding: 80px 12%;
        }
        .intro {
          text-align: center;
        }
        .intro h2 {
          font-size: 2.4rem;
          color: #127a3a;
          margin-bottom: 20px;
        }
        .intro p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.8;
        }
        .mvSection {
          background: #f4faf6;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        .mvCard {
          background: #fff;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
        }
        .mvCard:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12);
        }
        .mvCard h3 {
          color: #127a3a;
          font-size: 1.6rem;
          margin-bottom: 15px;
        }
        .whyUs {
          text-align: center;
        }
        .whyUs h2 {
          color: #127a3a;
          font-size: 2.2rem;
          margin-bottom: 40px;
        }
        .whyGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }
        .whyGrid div {
          background: #fff;
          padding: 22px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          transition: transform 0.3s ease;
        }
        .whyGrid div:hover {
          transform: scale(1.05);
        }
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* MAP HERO */}
      <div className="mapHero">
        <MapContainer center={[30.3753, 69.3451]} zoom={5}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {warehouses.map((w, i) => (
            <Marker key={i} position={[w.lat, w.lng]}>
              <Popup>
                <strong>{w.name}</strong>
                <p>{w.desc}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="mapOverlay">
          <h1>Sooraj Crop Sciences</h1>
          <p>Empowering Agriculture • Nourishing the Future</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="intro fade-up">
        <h2>Who We Are</h2>
        <p>
          Sooraj Crop Sciences is transforming Pakistan’s agriculture through
          innovation, expert guidance, and sustainable digital solutions —
          empowering farmers and strengthening the national food system.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="mvSection">
        <div className="mvCard fade-up">
          <h3>🌱 Our Mission</h3>
          <p>
            To deliver innovative, globally sourced crop solutions backed by
            expert advisory, digital tools, and farmer education — enhancing
            productivity, profitability, and sustainability.
          </p>
        </div>

        <div className="mvCard fade-up">
          <h3>🌾 Our Vision</h3>
          <p>
            To transform Pakistan’s agriculture through a unified digital-agri
            platform — driving higher yields, better nutrition, zero hunger,
            and poverty reduction.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="whyUs fade-up">
        <h2>Why Farmers Trust Us</h2>
        <div className="whyGrid">
          <div>✔️ Global-quality crop inputs</div>
          <div>✔️ Expert advisory & education</div>
          <div>✔️ Sustainable farming practices</div>
          <div>✔️ Nationwide warehouse network</div>
          <div>✔️ Smart digital agri solutions</div>
        </div>
      </section>
    </div>
  );
}
