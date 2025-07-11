import React from 'react';
import './FeaturedImages.css';

const habits = [
  {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80', // Correr
    alt: 'Correr',
    title: 'Correr',
    desc: 'Correr regularmente mejora la salud cardiovascular y reduce el estrés.'
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', // Comer saludable
    alt: 'Comer saludable',
    title: 'Comer saludable',
    desc: 'Una alimentación balanceada aporta energía y fortalece el sistema inmunológico.'
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', // Meditar
    alt: 'Meditar',
    title: 'Meditar',
    desc: 'La meditación diaria ayuda a la concentración y al bienestar emocional.'
  },
  {
    src: 'https://images.unsplash.com/photo-1553729784-e91953dec042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYSUyMGxleWVuZG98ZW58MHx8MHx8fDA%3D', // Leer (persona leyendo)
    alt: 'Leer',
    title: 'Leer',
    desc: 'Leer diariamente estimula la mente y mejora el conocimiento.'
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1682096640844-1ae5381c5580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYSUyMGR1cm1pZW5kb3xlbnwwfHwwfHx8MA%3D%3D', // Dormir bien (persona durmiendo)
    alt: 'Dormir bien',
    title: 'Dormir bien',
    desc: 'Dormir suficiente mejora el ánimo y la concentración.'
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1682435550316-f10ac027dd41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbmElMjBoaWRyYXRhbmRvc2V8ZW58MHx8MHx8fDA%3D', // Hidratarse (persona hidratándose)
    alt: 'Hidratarse',
    title: 'Hidratarse',
    desc: 'Beber agua frecuentemente mantiene el cuerpo saludable y activo.'
  }
];

const FeaturedImages = () => (
  <section className="featured-images-grid">
    {habits.map((habit, i) => (
      <div className="habit-card" key={i}>
        <img src={habit.src} alt={habit.alt} />
        <h3>{habit.title}</h3>
        <p>{habit.desc}</p>
      </div>
    ))}
  </section>
);

export default FeaturedImages;