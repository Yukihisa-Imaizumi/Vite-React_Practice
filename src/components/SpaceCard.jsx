import React from 'react';
import './SpaceCard.css'; // 新しく作るCSSファイル

const SpaceCard = ({ title, image, description }) => {
  return (
    <div className="space-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SpaceCard;