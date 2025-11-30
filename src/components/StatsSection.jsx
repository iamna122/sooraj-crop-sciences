import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

// --------------------------------------------
// 📌 ICONS — reduced size from 62 → 48
// --------------------------------------------
const UsersIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="usersGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8BC34A" />
        <stop offset="100%" stopColor="#4CAF50" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="7" r="4.2" stroke="url(#usersGradient)" strokeWidth="2" />
    <path d="M4.8 21v-2.2a7.2 7.2 0 0 1 14.4 0V21" stroke="url(#usersGradient)" strokeWidth="2" />
  </svg>
);

const RocketIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="rocketGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C6FF00" />
        <stop offset="100%" stopColor="#76FF03" />
      </linearGradient>
    </defs>
    <path d="M12 2C16.4 3.2 19.5 6.9 20 12C14 12.5 10.2 9.4 9 5L12 2Z" stroke="url(#rocketGradient)" strokeWidth="2" />
    <path d="M7 14l3 3" stroke="url(#rocketGradient)" strokeWidth="2" />
    <path d="M4 20l5-2-2 5" stroke="url(#rocketGradient)" strokeWidth="2" />
  </svg>
);

const ClientsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="clientsGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="7" r="4.3" stroke="url(#clientsGradient)" strokeWidth="2" />
    <path d="M5 21v-1.3a7.4 7.4 0 0 1 14 0V21" stroke="url(#clientsGradient)" strokeWidth="2" />
  </svg>
);

const AwardIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="awardGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#AED581" />
        <stop offset="100%" stopColor="#7CB342" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="7" r="4.5" stroke="url(#awardGradient)" strokeWidth="2" />
    <path d="M7 14h10l1.6 8-6-2-6 2 1.4-8z" stroke="url(#awardGradient)" strokeWidth="2" />
  </svg>
);

const ICONS = {
  users: <UsersIcon />,
  projects: <RocketIcon />,
  clients: <ClientsIcon />,
  awards: <AwardIcon />,
};

// --------------------------------------------
// 📌 STAT CARD – reduced padding, text, glow
// --------------------------------------------
function StatCard({ icon, label, target, index, isInView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 3.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
      }}
      style={{
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(14px)",
        borderRadius: "16px",
        padding: "45px 22px 40px",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Glow Behind Icon */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.35, 0.18] }}
        transition={{ repeat: Infinity, duration: 2.8 }}
        style={{
          width: "70px",
          height: "70px",
          top: "22px",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          position: "absolute",
          background:
            "radial-gradient(circle, rgba(30,180,80,0.25), transparent 70%)",
        }}
      />

      {/* Icon */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.3 }}
        style={{ marginBottom: "12px", position: "relative", zIndex: 2 }}
      >
        {ICONS[icon]}
      </motion.div>

      {/* Counter */}
      <div
        style={{
          fontSize: "2.6rem",
          color: "#0c6b2c",
          fontWeight: "800",
          zIndex: 2,
          position: "relative",
        }}
      >
        <motion.span>{rounded}</motion.span>+
      </div>

      <p
        style={{
          marginTop: "6px",
          fontSize: "1rem",
          fontWeight: "600",
          color: "#333",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

// --------------------------------------------
// 📌 MAIN SECTION – also slightly smaller
// --------------------------------------------
export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: "Active Members", target: 1200, icon: "users" },
    { label: "Projects Completed", target: 85, icon: "projects" },
    { label: "Happy Clients", target: 240, icon: "clients" },
    { label: "Awards Won", target: 15, icon: "awards" },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: "60px 0",
        background:
          "linear-gradient(130deg, #eafff0 0%, #ffffff 40%, #d1ffe0 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.3rem",
          textAlign: "center",
          fontWeight: "800",
          color: "#0d6a32",
          marginBottom: "35px",
        }}
      >
        Our Growth in Numbers
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
