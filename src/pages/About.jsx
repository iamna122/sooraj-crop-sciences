import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTranslation } from "react-i18next";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // Example warehouse locations
  const warehouses = [
    { lat: 31.5204, lng: 74.3587, name: "Lahore Warehouse", desc: "Serving Punjab region with high-quality fertilizers and seeds." },
    { lat: 24.8607, lng: 67.0011, name: "Karachi Warehouse", desc: "Supplying Sindh farmers with innovative crop solutions." },
    { lat: 33.6844, lng: 73.0479, name: "Islamabad Warehouse", desc: "Central hub for Northern Pakistan operations." },
  ];

  return (
    <div style={{ fontFamily: lang === "ur" ? "Noori Nastaleeq, serif" : "'Inter', sans-serif" }}>
      
      {/* MAP HERO */}
      <div style={{ height: "450px", position: "relative" }}>
        <MapContainer center={[30.3753, 69.3451]} zoom={5} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {warehouses.map((wh, idx) => (
            <Marker key={idx} position={[wh.lat, wh.lng]}>
              <Popup>
                <strong>{wh.name}</strong>
                <p>{wh.desc}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1))",
            zIndex: 1,
          }}
        ></div>
      </div>

      {/* COMPANY INTRO */}
      <section style={{ width: "85%", margin: "50px auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.8rem", color: "#127a3a", marginBottom: "20px", fontWeight: "700" }}>
          About Sooraj Crop Sciences
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8" }}>
          At Sooraj Crop Sciences, we are committed to transforming agriculture in Pakistan through innovation, digital tools, and sustainable practices. Our warehouses strategically supply global-quality inputs and expert guidance to farmers nationwide.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", padding: "60px 10px", background: "#f5f9f6" }}>
        <div style={cardStyle}>
          <h2 style={titleStyle}>🌱 Mission</h2>
          <p>
            To deliver innovative, globally sourced crop solutions backed by expert advisory, digital tools, and farmer education. We build capacity, enhance profitability, and promote sustainable farming while connecting Pakistan’s agriculture ecosystem for national uplift.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={titleStyle}>🌾 Vision</h2>
          <p>
            To transform Pakistan’s agriculture through a unified digital-agri platform that delivers global-quality inputs, expert guidance, and sustainable solutions—driving higher yields, better nutrition, and progress toward zero hunger and poverty reduction.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ width: "85%", margin: "70px auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#127a3a", marginBottom: "40px" }}>Why Choose Us</h2>
        <div style={{ display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={cardStyle}>✔️ Expert Advisory & Digital Tools</div>
          <div style={cardStyle}>✔️ High-Quality Inputs & Seeds</div>
          <div style={cardStyle}>✔️ Sustainable & Profitable Farming</div>
          <div style={cardStyle}>✔️ Nationwide Network & Support</div>
          <div style={cardStyle}>✔️ Committed to Farmer Education & Growth</div>
        </div>
      </section>

    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  color: "#555",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "default",
  textAlign: "left",
};

const titleStyle = {
  color: "#127a3a",
  fontSize: "1.5rem",
  marginBottom: "12px",
};
