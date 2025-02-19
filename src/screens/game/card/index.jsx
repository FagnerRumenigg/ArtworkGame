import React from "react";
import "./styles.css";

function ArtworkCard({ artwork }) {
  return (
    <div className="artwork-card">
      <div className="artwork-image-container">
        <img
          src={artwork.image}
          alt={artwork.description || artwork.title} // Alt com fallback para o título
          title={artwork.description} // Tooltip nativo do navegador
          className="artwork-image"
        />
      </div>
      <div className="artwork-title">{artwork.title}</div>
    </div>
  );
}

export default ArtworkCard;
