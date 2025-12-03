import React, { useState, useMemo } from "react";

// ====================== YOUTUBE ID EXTRACTOR ======================
const getYouTubeId = (url) => {
  if (!url) return "";

  if (url.length === 11) return url;

  const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);

  return match ? match[1] : "";
};

// ====================== SINGLE VIDEO CARD ======================
const YouTubeCard = ({ link, title, large }) => {
  const videoId = useMemo(() => getYouTubeId(link), [link]);

  // Hooks MUST come first ALWAYS
  const [play, setPlay] = useState(false);
  const [thumbUrl, setThumbUrl] = useState(
    videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : ""
  );

  const handleThumbError = () => {
    if (thumbUrl.includes("maxresdefault")) {
      setThumbUrl(`https://img.youtube.com/vi/${videoId}/sddefault.jpg`);
    } else if (thumbUrl.includes("sddefault")) {
      setThumbUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    }
  };

  if (!videoId) {
    return <div style={{ display: "none" }} />;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div
      style={{
        ...styles.card,
        ...(large ? styles.largeCard : styles.smallCard),
      }}
      className="video-card"
    >
      {play ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={styles.iframe}
          className="fade-in"
        ></iframe>
      ) : (
        <div
          style={{
            ...styles.thumbnail,
            backgroundImage: `url(${thumbUrl})`,
          }}
          onClick={() => setPlay(true)}
          className="hover-card"
        >
          <img
            src={thumbUrl}
            alt={title}
            style={{ display: "none" }}
            onError={handleThumbError}
          />

          <div style={styles.overlay}></div>

          <div style={styles.playBtn} className="pulse">
            ▶
          </div>

          <h3 style={styles.videoTitle}>{title}</h3>
        </div>
      )}
    </div>
  );
};

// ====================== MAIN VIDEO SECTION ======================
export default function VideoSection() {
  const videos = [
    {
      link: "https://www.youtube.com/watch?v=B8CJZX55D9s",
      title: "Sooraj Crop Sciences – Official Documentary",
    },
    {
      link: "https://www.youtube.com/watch?v=ljrDiz5ExKI",
      title: "Farmer Training Session – 2025",
    },
    {
      link: "https://www.youtube.com/watch?v=G7JEmNY1Rss",
      title: "Product Demo – Crop Booster Technology",
    },
  ];

  return (
    <section style={styles.container}>
      <div style={styles.headerRow}>
        <h2 style={styles.heading}>Latest Videos from Sooraj Crops</h2>

        <a
          href="https://www.youtube.com/@soorajcropsciences5322"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.channelBtn}
        >
          Visit Channel
        </a>
      </div>

      <div style={styles.grid}>
        <YouTubeCard link={videos[0].link} title={videos[0].title} large />

        <div style={styles.smallVideos}>
          <YouTubeCard link={videos[1].link} title={videos[1].title} />
          <YouTubeCard link={videos[2].link} title={videos[2].title} />
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .hover-card { transition: transform 0.35s ease; }
          .hover-card:hover { transform: scale(1.03); }

          .pulse { animation: pulseAnim 1.6s infinite ease-in-out; }

          @keyframes pulseAnim {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.18); }
            100% { transform: translate(-50%, -50%) scale(1); }
          }

          .fade-in {
            animation: fadeIn 0.5s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.97); }
            to { opacity: 1; transform: scale(1); }
          }

          .video-card {
            animation: appearCard 0.6s ease forwards;
            opacity: 0;
          }

          @keyframes appearCard {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 850px) {
            .video-card {
              width: 100% !important;
            }
          }
        `}
      </style>
    </section>
  );
}

// ====================== STYLES ======================
const styles = {
  container: {
    padding: "2rem 3rem",
    background: "#f4f7f3",
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },

  heading: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#127a3a",
  },

  channelBtn: {
    background: "#127a3a",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "8px",
    fontSize: "0.95rem",
    fontWeight: 600,
    textDecoration: "none",
    transition: "0.3s",
  },

  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  largeCard: {
    flex: 2,
    aspectRatio: "16/9",
  },

  smallVideos: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  smallCard: {
    aspectRatio: "16/9",
  },

  card: {
    background: "#fff",
    borderRadius: "14px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.1)",
    overflow: "hidden",
    position: "relative",
  },

  thumbnail: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.3)",
  },

  playBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#ff3b3b",
    color: "#fff",
    padding: "18px 22px",
    borderRadius: "50%",
    fontSize: "1.6rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },

  videoTitle: {
    position: "relative",
    color: "#fff",
    fontSize: "1.1rem",
    padding: "10px",
    background: "rgba(0,0,0,0.4)",
    width: "100%",
    margin: 0,
  },

  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
    objectFit: "cover", // FIX BLACK BORDERS
  },
};
