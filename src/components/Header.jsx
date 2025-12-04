import React from 'react';
import './Header.css';
import logo from '../assets/aselab_logo_dark.png'; // 画像パスをスクリーンショットに合わせました

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="ASE LAB Logo" className="logo" />
        <h1>ASE LAB</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;