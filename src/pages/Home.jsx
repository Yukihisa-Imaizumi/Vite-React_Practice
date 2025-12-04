import React, { useEffect, useState } from 'react';
import SpaceCard from '../components/SpaceCard';
import './Home.css';
import cosmicImg from '../assets/cosmic_img01.jpg'; 

const Home = () => {
  // マウント時にアニメーション用のクラスを付与するためのState
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // コンポーネントが描画されたらフラグを立てる
  }, []);

  const projects = [
    { id: 1, title: 'Satellite Cube', desc: '1U CubeSat Attitude Control', img: cosmicImg },
    { id: 2, title: 'Solar Sail', desc: 'Propulsion utilizing radiation pressure', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=60' },
    { id: 3, title: 'Rover AI', desc: 'Autonomous path planning', img: 'https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&w=500&q=60' }
  ];

  return (
    <div className={`home-page ${isLoaded ? 'fade-in-active' : ''}`}>
      <div className="hero-section">
        <h2 className="slide-up-text">Welcome to ASE LAB</h2>
        <p className="slide-up-text delay-1">Exploring the frontier of Aerospace Engineering.</p>
      </div>

      <div className="card-grid">
        {projects.map((project, index) => (
          // styleでanimationDelayを動的に設定し、順番に出てくるようにする
          <div key={project.id} className="card-anim-wrapper" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
            <SpaceCard 
              title={project.title}
              description={project.desc}
              image={project.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;