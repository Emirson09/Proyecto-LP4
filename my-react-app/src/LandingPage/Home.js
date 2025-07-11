import React from 'react';
import Menu from './Menu';
import ReactionButton from './ReactionButton';
import './Home.css';
import FeaturedImages from './FeaturedImages';
import TestimonialsCarousel from './TestimonialsCarousel';
import ContactSection from './ContactSection';

const Home = () => (
  <div className="landing-container">
    <Menu />
    <header id="inicio" className="landing-header">
      <h1>Habit Wise</h1>
      <p>Tu asistente para crear hábitos saludables y mejorar tu vida.</p>
      <button
        className="register-btn"
        onClick={() => window.location.href = '/login'}
      >
        Registrarse
      </button>
    </header>
    <h2 id="habitos" className="habits-title">Algunos buenos hábitos para tu bienestar</h2>
    <FeaturedImages />
    <div id="testimonios">
      <TestimonialsCarousel />
    </div>
    <div id="contacto">
      <ContactSection />
    </div>
  </div>
);

export default Home;