import React from 'react';
import cosmicBg from '../assets/cosmic_img01.jpg';

const Background = () => {
  return (
    <div 
      className="background-container"
      style={{ backgroundImage: `url(${cosmicBg})` }}
    >
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background;