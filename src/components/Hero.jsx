import React, { useEffect, useState } from "react";
import img1 from "../assets/main-banner.jpg";
import img2 from "../assets/main-banner2.jpg";
import img3 from "../assets/main-banner3.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={styles.heroContainer}>
      {/* LEFT TEXT BLOCK */}
      <div style={styles.textContainer}>
        <h1 style={styles.title}>{t("heroTitle")}</h1>
        <p style={styles.subtitle}>{t("heroPara1")}</p>
        <p style={styles.subtitle}>{t("heroPara2")}</p>
      </div>

      {/* ✅ PROFESSIONAL FADE SLIDER */}
      <div style={styles.carouselWrapper}>
        <img
          key={index}
          src={images[index]}
          alt="Hero"
          style={styles.image}
        />
      </div>
    </section>
  );
};

const styles = {
  heroContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 3rem",
    background: "#c6e7ca",
    flexWrap: "wrap",
    gap: "1.5rem",
  },

  textContainer: { flex: 1, color: "#080808" },

  title: {
    fontSize: "2rem",
    marginBottom: "0.7rem",
    fontWeight: 700,
  },

  subtitle: {
    fontSize: "1.2rem",
    lineHeight: 1.55,
    color: "#494747",
    marginBottom: "0.7rem",
  },

  carouselWrapper: {
    flex: 1,
    position: "relative",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  /* ✅ CLEAN PROFESSIONAL ANIMATION */
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "20px",
    objectFit: "contain",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    animation: "fadeSlide 1s ease-in-out",
  },
};

export default Hero;
