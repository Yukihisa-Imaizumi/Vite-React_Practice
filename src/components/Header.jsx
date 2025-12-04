import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ASTRO CAMP</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#past">History</a></li>
          <li><a href="#apply" style={{ color: 'var(--color-accent)' }}>Apply</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;