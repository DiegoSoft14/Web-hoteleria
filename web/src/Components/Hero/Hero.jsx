import React from 'react';

const Hero = ({ onOpenBooking }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-image" style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`
        }}></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">HYATT CENTRIC</span>
              <span className="title-line">SAN ISIDRO LIMA</span>
            </h1>
            <p className="hero-subtitle">Descubre la esencia de Lima desde el corazón de San Isidro</p>
          </div>
          
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('habitaciones')}
            >
              Ver Habitaciones
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('nosotros')}
            >
              Conócenos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;