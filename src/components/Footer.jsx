// add comment in foter
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* LEFT — COMPANY INFO */}
        <div style={{ ...styles.column, gap: "4px" }}>
          <h2 style={styles.brand}>Sooraj Crop Sciences</h2>

          <p style={styles.text}>
            📍 Apartment 01 Floor 02 Almeezan Arcade 24-CCA, Khayaban E Ameen,
            Lahore, 54770
          </p>
          <p style={styles.text}>📞 04235111003</p>
          <p style={styles.text}>✉️ info@soorajcropsciences.com</p>

          {/* SOCIAL ICONS */}
          <div style={styles.socialRow}>
            <SocialIcon
              url="https://www.facebook.com/p/Sooraj-Crop-Sciences-61555305478429/"
              icon={<FaFacebookF />}
            />
            <SocialIcon
              url="https://www.instagram.com/soorajcropsciences/"
              icon={<FaInstagram />}
            />
            <SocialIcon url="https://linkedin.com" icon={<FaLinkedinIn />} />
            <SocialIcon url="https://youtube.com" icon={<FaYoutube />} />
            <SocialIcon url="https://wa.me/04235111003" icon={<FaWhatsapp />} />
          </div>
        </div>

        {/* CENTER — NAVIGATION */}
        <div style={{ ...styles.column, textAlign: "center" }}>
          <h3 style={styles.heading}>Quick Links</h3>

          <div style={{ ...styles.links, gap: "20px" }}>
            <FooterLink label="Home" to="/" />
            <FooterLink label="About" to="/about" />
            <FooterLink label="Products" to="/products" />
            <FooterLink label="Contact" to="/contact" />
            <FooterLink label="FAQs" to="/faqs" />
          </div>
        </div>

        {/* CATEGORY LINKS */}
        <div style={{ ...styles.column, textAlign: "center" }}>
          <h3 style={styles.heading}>Categories</h3>

          <div style={{ ...styles.links, gap: "20px" }}>
            <FooterLink label="All" to="/products?category=All" />
            <FooterLink label="Fungicide" to="/products?category=Fungicide" />
            <FooterLink
              label="Insecticide"
              to="/products?category=Insecticide"
            />
            <FooterLink
              label="Micronutrients"
              to="/products?category=Micronutrients"
            />
          </div>
        </div>

        {/* RIGHT — MAP */}
        <div style={{ ...styles.column, textAlign: "right" }}>
          <h3 style={styles.heading}>Find Us</h3>

          <iframe
            title="office-map-footer"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26884.02493846678!2d74.24503060741358!3d31.384411034262236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907eecc85c783%3A0xaa4ebaade9463825!2sSooraj%20Crop%20Sciences!5e1!3m2!1sen!2s!4v1762350948029!5m2!1sen!2s"
            width="100%"
            height="180"
            style={styles.map}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} Sooraj Crop Sciences — All Rights Reserved.
      </div>
    </footer>
  );
}

/* 🔗 NAVIGATION LINK COMPONENT */
function FooterLink({ to, label }) {
  return (
    <Link
      to={to}
      style={styles.link}
      onMouseOver={(e) => (e.target.style.color = "#caffd0")}
      onMouseOut={(e) => (e.target.style.color = "white")}
    >
      {label}
    </Link>
  );
}

/* 🟢 SOCIAL ICON BUTTON COMPONENT */
function SocialIcon({ url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.socialIcon}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#1c8c43";
        e.target.style.transform = "translateY(-4px)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "#ffffff15";
        e.target.style.transform = "translateY(0)";
      }}
    >
      {icon}
    </a>
  );
}

/* 🎨 INLINE STYLES */
const styles = {
  footer: {
    background: "linear-gradient(135deg, #0b5a27, #0d6a2f)",
    color: "white",
    padding: "30px 20px 20px",
    fontFamily: "Inter, Arial, sans-serif",
    marginTop: "80px",
    boxShadow: "0 -5px 15px rgba(0,0,0,0.2)",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  brand: {
    fontSize: "26px",
    fontWeight: "800",
    marginBottom: "12px",
  },

  heading: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#c8ffcc",
  },

  text: {
    fontSize: "15px",
    fontWeight: "500",
    opacity: 0.9,
  },

  links: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  link: {
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.3s",
  },

  socialRow: {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
  },

  socialIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff15",
    fontSize: "20px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s ease",
  },

  map: {
    border: 0,
    borderRadius: "12px",
  },

  bottom: {
    marginTop: "35px",
    paddingTop: "18px",
    borderTop: "1px solid rgba(255,255,255,0.3)",
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.85,
    fontWeight: "600",
  },
};
