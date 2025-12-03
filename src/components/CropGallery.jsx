// src/components/CropGallery.jsx
import React, { useState } from "react";
import { crops } from "../data/cropData";
import "./CropGallery.css";

const CropGallery = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);

  return (
    <div className="crop-section">
      <h2 className="crop-title">Crops That We Protect</h2>
      <p className="crop-subtitle">
        Our specialized solutions safeguard a variety of essential crops.
      </p>

      {/* GRID */}
      <div className="crop-grid">
        {crops.map((crop) => (
          <div
            className="crop-card"
            key={crop.id}
            onClick={() => setSelectedCrop(crop)}
          >
            <img src={crop.image} alt={crop.name} className="crop-image" />
            <span className="crop-name">{crop.name}</span>
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {selectedCrop && (
        <div className="popup-overlay" onClick={() => setSelectedCrop(null)}>
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()} /* prevent closing when clicking inside */
          >
            <button className="close-btn" onClick={() => setSelectedCrop(null)}>
              ✕
            </button>

            <img
              src={selectedCrop.image}
              alt={selectedCrop.name}
              className="popup-img"
            />

            <h2 className="popup-title">{selectedCrop.name}</h2>
            <p className="popup-desc">{selectedCrop.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropGallery;
