import React, { useState } from 'react';
import './Menu.css';

const LeafIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <ellipse cx="18" cy="18" rx="16" ry="12" fill="#95d5b2"/>
    <path d="M18 8 Q22 18 18 28 Q14 18 18 8 Z" fill="#2d6a4f"/>
  </svg>
);

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="menu">
      <div className="menu-logo">
        <LeafIcon />
        <span className="logo-text">Habit Wise</span>
      </div>
      <button className="hamburger-btn" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
      <div className={`menu-links${open ? ' open' : ''}`}>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#habitos">Hábitos</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <button className="login-btn">Iniciar sesión</button>
      </div>
    </nav>
  );
};

export default Menu;