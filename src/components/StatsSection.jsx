// Stats Section with Urdu + English
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ TRANSLATION HOOK

// --------------------------------------------
// 📌 ICONS
// --------------------------------------------
const UsersIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4.2" stroke="#4CAF50" strokeWidth="2" />
    <path d="M4.8 21v-2.2a7.2 7.2 0 0 1 14.4 0V21" stroke="#4CAF50" strokeWidth="2" />
  </svg>
);

const RocketIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C16.4 3.2 19.5 6.9 20 12C14 12.5 10.2 9.4 9 5L12 2Z" stroke="#76FF03" strokeWidth="2" />
  </svg>
);

const ClientsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4.3" stroke="#2E7D32" strokeWidth="2" />
    <path d="M5 21v-1.3a7.4 7.4 0 0 1 14 0V21" stroke="#2E7D32" strokeWidth="2" />
  </svg>
);

const AwardIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4.5" stroke="#7CB342" strokeWidth="2" />
    <path d="M7 14h10l1.6 8-6-2-6 2 1.4-8z" stroke="#7CB342" strokeWidth="2" />
  </svg>
);

const ICONS = {
  users: <UsersIcon />,
  projects: <RocketIcon />,
  clients: <ClientsIcon />,
  awards: <AwardIcon />,
};

// --------------------------------------------
// 📌 STAT CARD
// --------------------------------------------
function StatCard({ icon, label, target, index, isInView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 3 });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 }}
      style={{
        background: "#ffffffcc",
        borderRadius: "14px",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {ICONS[icon]}

      <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "#0c6b2c" }}>
        <motion.span>{rounded}</motion.span>+
      </div>

      <p
        style={{
          marginTop: "8px",
          fontSize: "1rem",
          fontWeight: "600",
          fontFamily: "Noto Nastaliq Urdu, Noori Nastaleeq, serif", // ✅ URDU FONT
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

// --------------------------------------------
// ✅ MAIN STATS SECTION WITH TRANSLATION
// --------------------------------------------
export default function StatsSection() {
  const { t, i18n } = useTranslation(); // ✅
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const isUrdu = i18n.language === "ur"; // ✅ For RTL + Nastaleeq

  const stats = [
    { label: t("stats.members"), target: 1200, icon: "users" },
    { label: t("stats.projects"), target: 85, icon: "projects" },
    { label: t("stats.clients"), target: 240, icon: "clients" },
    { label: t("stats.awards"), target: 15, icon: "awards" },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: "60px 0",
        background: "#f0fff4",
        direction: isUrdu ? "rtl" : "ltr", // ✅ RTL SUPPORT
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        style={{
          fontSize: "2.3rem",
          textAlign: "center",
          fontWeight: "800",
          color: "#0d6a32",
          marginBottom: "35px",
          fontFamily: isUrdu
            ? "Noto Nastaliq Urdu, Noori Nastaleeq, serif"
            : "inherit",
        }}
      >
        {t("stats.title")}
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "30px",
          width: "85%",
          margin: "0 auto",
        }}
      >
        {stats.map((item, index) => (
          <StatCard key={index} index={index} {...item} isInView={isInView} />
        ))}
      </div>
    </section>
  );
}
