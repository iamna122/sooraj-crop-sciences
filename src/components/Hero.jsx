import React from "react";
import productImg from "../assets/NIPA.jpg";

const HeroClassic = () => {
  return (
    <section style={styles.heroContainer}>
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

        <p style={styles.subtitle}>
          Crops face constant threats from insects, fungi, and nutrient
          imbalances, as well as unpredictable weather conditions such as heat,
          cold, drought, and floods. We partner with farmers to tackle these
          challenges, ensuring a reliable supply of safe, nutritious, and
          high-quality produce while supporting efficient use of agricultural
          resources and fostering sustainable farming practices.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img src={productImg} alt="Hero" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  heroContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3rem 5rem",
    backgroundColor: "#c6e7caff",
    minHeight: "55vh",
    flexWrap: "wrap",
  },
  textContainer: { flex: 1, paddingRight: "2rem", color: "#080808ff" },
  title: { fontSize: "2.5rem", marginBottom: "1rem", fontWeight: 700 },
  subtitle: { fontSize: "1.15rem", lineHeight: 1.6, color: "#494747ff" },
  imageContainer: { flex: 1, display: "flex", justifyContent: "center" },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(124, 206, 48, 0.12)",
    objectFit: "cover",
    transition: "transform 0.3s",
  },
};

export default HeroClassic;
