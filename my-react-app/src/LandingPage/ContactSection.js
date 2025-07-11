import React from 'react';
import './ContactSection.css';

const ContactSection = () => (
  <footer className="footer-contact-section">
    <div className="newsletter">
      <h2>Únete al boletín para recibir nuestras mejores novedades</h2>
      <p>Puedes darte de baja en cualquier momento.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Tu correo electrónico" required />
        <button type="submit">Suscribir</button>
      </form>
    </div>
    <div className="footer-links">
      <div>
        <h3>Sobre nosotros</h3>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#habitos">Hábitos</a></li>
        </ul>
      </div>
      <div>
        <h3>Contáctenos</h3>
        <ul>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#apoyo">Apoyo</a></li>
        </ul>
      </div>
      <div>
        <h3>Redes sociales</h3>
        <div className="footer-social">
          <a href="https://facebook.com" className="social-btn facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" className="social-btn instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" className="social-btn twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" className="social-btn linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>Habit Wise © 2025</span>
      <div className="footer-social">
        <a href="https://facebook.com" className="social-btn facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://instagram.com" className="social-btn instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com" className="social-btn twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://linkedin.com" className="social-btn linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </footer>
);

export default ContactSection;