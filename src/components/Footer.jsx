import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#127a3a", color: "white", padding: "40px 0", textAlign: "center" }}>
      <h3>Sooraj Crop Sciences</h3>
      <p>📍 Apartment 01 Floor 02 Almeezan Arcade 24-CCA, Khayaban E Ameen, Lahore, 54770</p>
      <p>📞 04235111003</p>
      <p>✉️ info@soorajcropsciences.com</p>
      <p>© {new Date().getFullYear()} Sooraj Crop Sciences</p>
    </footer>
  );
}


