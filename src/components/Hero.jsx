import React, { useEffect, useState } from "react";
import img1 from "../assets/main-solgan.jpeg";
import img2 from "../assets/main-solgan1.jpeg";
import img3 from "../assets/main-solgan2.jpeg";
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

      {/* CAROUSEL */}
      <div style={styles.carouselWrapper}>
        {images.map((img, i) => {
          const position = (i - index + images.length) % images.length;

          return (
            <div
              key={i}
              style={{
                ...styles.slide,
                ...(position === 0
                  ? styles.centerSlide
                  : position === 1
                  ? styles.rightSlide
                  : styles.leftSlide),
              }}
            >
              <img src={img} alt="" style={styles.image} />
            </div>
          );
        })}
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
    fontSize: "1rem",
    lineHeight: 1.55,
    color: "#494747",
    marginBottom: "0.7rem",
  },

  carouselWrapper: {
    flex: 1,
    position: "relative",
    height: "280px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },

  slide: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transition: "all 0.9s ease",
  },

  centerSlide: {
    transform: "translate(-50%, -50%) scale(1)",
    zIndex: 3,
    opacity: 1,
  },

  rightSlide: {
    transform: "translate(200px, -50%) scale(0.75)",
    filter: "blur(5px) brightness(100%)",
    opacity: 0.5,
    zIndex: 1,
  },

  leftSlide: {
    transform: "translate(-200px, -50%) scale(0.75)",
    filter: "blur(5px) brightness(70%)",
    opacity: 0.5,
    zIndex: 1,
  },

  image: {
    width: "100%",
    maxWidth: "380px",
    height: "auto",
    borderRadius: "16px",
    objectFit: "contain",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
};

export default Hero;
