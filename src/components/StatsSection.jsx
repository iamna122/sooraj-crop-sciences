import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

// --------------------------------------------
// PREMIUM SVG ICONS
// --------------------------------------------
const UsersIcon = () => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#usersGradient)"
    strokeWidth="2.3"
    strokeLinecap="round"
  >
    <defs>
      <linearGradient id="usersGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8BC34A" />
        <stop offset="100%" stopColor="#4CAF50" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="7" r="4.2" />
    <path d="M4.8 21v-2.2a7.2 7.2 0 0 1 14.4 0V21" />
  </svg>
);

const RocketIcon = () => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#rocketGradient)"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="rocketGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C6FF00" />
        <stop offset="100%" stopColor="#76FF03" />
      </linearGradient>
    </defs>
    <path d="M12 2C16.4 3.2 19.5 6.9 20 12C14 12.5 10.2 9.4 9 5L12 2Z" />
    <path d="M7 14l3 3" />
    <path d="M4 20l5-2-2 5" />
  </svg>
);

const ClientsIcon = () => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#clientsGradient)"
    strokeWidth="2.1"
    strokeLinecap="round"
  >
    <defs>
      <linearGradient id="clientsGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="7" r="4.3" />
    <path d="M5 21v-1.3a7.4 7.4 0 0 1 14 0V21" />
  </svg>
);

const AwardIcon = () => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#awardGradient)"
    strokeWidth="2.2"
    strokeLinecap="round"
  >
    <defs>
      <linearGradient id="awardGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#AED581" />
        <stop offset="100%" stopColor="#7CB342" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="7" r="4.5" />
    <path d="M7 14h10l1.6 8-6-2-6 2 1.4-8z" />
  </svg>
);

const ICONS = {
  users: <UsersIcon />,
  projects: <RocketIcon />,
  clients: <ClientsIcon />,
  awards: <AwardIcon />,
};

// --------------------------------------------
// STAT CARD COMPONENT
// --------------------------------------------
function StatCard({ icon, label, target, index, isInView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 4.2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.9, type: "spring" }}
      whileHover={{
        scale: 1.06,
        rotateX: 4,
        rotateY: -4,
        boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
        transition: { duration: 0.4 },
      }}
      style={{
        background: "rgba(255, 255, 255, 0.45)",
        backdropFilter: "blur(18px)",
        borderRadius: "20px",
        padding: "70px 30px 60px",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Icon */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.8 }}
        style={{ marginBottom: "20px", position: "relative", zIndex: 3 }}
      >
        {ICONS[icon]}
      </motion.div>

      {/* Glow Behind Icon */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{
          width: "90px",
          height: "90px",
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(30,180,80,0.25), transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* Counter */}
      <div
        style={{
          fontSize: "3.4rem",
          fontWeight: "800",
          color: "#0c6b2c",
          position: "relative",
          zIndex: 3,
        }}
      >
        <motion.span style={{ display: "inline-block" }}>{rounded}</motion.span>
        +
      </div>

      <p
        style={{
          marginTop: "12px",
          fontSize: "1.2rem",
          color: "#2c2c2c",
          fontWeight: "600",
          position: "relative",
          zIndex: 2,
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

// --------------------------------------------
// MAIN SECTION
// --------------------------------------------
export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

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
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(130deg, #eafff0 0%, #ffffff 40%, #d1ffe0 100%)",
      }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "3rem",
          textAlign: "center",
          fontWeight: "800",
          color: "#0d6a32",
          marginBottom: "50px",
          letterSpacing: "-1px",
        }}
      >
        Our Growth in Numbers
      </motion.h2>

      {/* Stats Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "40px",
          width: "88%",
          margin: "0 auto",
        }}
      >
        {stats.map((item, index) => (
          <StatCard
            key={index}
            index={index}
            label={item.label}
            target={item.target}
            icon={item.icon}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}
