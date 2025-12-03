import React, { useEffect, useState } from "react";
import img1 from "../assets/NIPA.jpg";
import img2 from "../assets/NIPA2.jpg";
import img3 from "../assets/NIPA3.jpg";

const Hero = () => {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  // ⬇️ Change 4000 to test faster/slower slide for testing
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  // const nextSlide = () => {
    
  // };

  return (
    <section style={styles.heroContainer}>
      {/* LEFT TEXT BLOCK */}
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Welcome to Sooraj Crop Science</h1>
        <p style={styles.subtitle}>
          At Sooraj Crop Science, we are dedicated to delivering high-quality
          crop protection and nutrition solutions to farmers across Pakistan. As
          a trusted supplier of fungicides, insecticides, and micronutrients, we
          provide advanced and sustainable methods to ensure the health and
          productivity of crops from planting to harvest. Our carefully
          researched product portfolio is designed to protect plants against
          diseases, pests, and nutritional deficiencies while promoting optimal
          growth and yield.
        </p>
        <p style={styles.subtitle}>Crops face constant threats from insects, fungi, and nutrient
          imbalances, as well as unpredictable weather conditions such as heat,
          cold, drought, and floods. We partner with farmers to tackle these
          challenges, ensuring a reliable supply of safe, nutritious, and
          high-quality produce while supporting efficient use of agricultural
          resources and fostering sustainable farming practices.</p>
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
    overflow: "visible", // show side slides
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
    height: "auto", // keep full image visible
    borderRadius: "16px",
    objectFit: "contain",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
};

export default Hero;
