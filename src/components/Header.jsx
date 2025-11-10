// src/components/Header.jsx
import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // メニュー外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <header className="header">
        <button className="hamburger" onClick={toggleMenu} aria-label="メニュー">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeMenu} aria-label="閉じる">
          ×
        </button>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* オーバーレイ */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  )
}

export default Header