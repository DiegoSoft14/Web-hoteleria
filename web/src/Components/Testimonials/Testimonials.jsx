// components/Testimonials/Testimonials.jsx
import React from 'react';

const Testimonials = ({ testimonials }) => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <div className="section-header">
          <h2>Testimonios</h2>
          <p className="section-subtitle">Lo que nuestros huéspedes dicen de nosotros</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.date}</span>
                </div>
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;