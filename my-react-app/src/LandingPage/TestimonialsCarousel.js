import React, { useState } from 'react';
import './TestimonialsCarousel.css';

const testimonials = [
  {
    name: "Ana",
    text: "¡Habit Wise me ayudó a mejorar mi rutina diaria!",
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Carlos",
    text: "Ahora soy más productivo y saludable.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Luisa",
    text: "¡Recomiendo Habit Wise a todos!",
    photo: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials-carousel">
      <button type="button" onClick={prev} className="carousel-btn">‹</button>
      <div className="testimonial" key={index}>
        <img src={testimonials[index].photo} alt={testimonials[index].name} />
        <p>"{testimonials[index].text}"</p>
        <span>- {testimonials[index].name}</span>
      </div>
      <button type="button" onClick={next} className="carousel-btn">›</button>
    </section>
  );
};

export default TestimonialsCarousel;