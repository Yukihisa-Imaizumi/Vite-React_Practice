import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import HistoryIcon from '@mui/icons-material/History';
import SendIcon from '@mui/icons-material/Send';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ASTRO CAMP</div>
      <nav className="nav">
        <ul>
          <li><a href="#home"><HomeIcon fontSize="large"  /> Home</a></li>
          <li><a href="#activities"> <EventIcon fontSize='large'/> Activities</a></li>
          <li><a href="#past"><HistoryIcon fontSize='large'/> History</a></li>
          <li><a href="#apply" style={{ color: 'var(--color-accent)' }}><SendIcon fontSize='large' />Apply</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;