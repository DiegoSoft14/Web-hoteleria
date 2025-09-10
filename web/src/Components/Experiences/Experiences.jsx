// components/Experiences/Experiences.jsx
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Experiences = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      title: 'Tour Gastronómico Lima',
      description: 'Descubre la riqueza de la cocina peruana con nuestro chef experto',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 120,
      duration: '4 horas',
      includes: ['Visita a mercado local', 'Clase de cocina', 'Degustación de piscos', 'Recetario exclusivo']
    },
    {
      id: 2,
      title: 'Tour Exclusivo por San Isidro',
      description: 'Descubre la elegancia de San Isidro: parques históricos, arte urbano y la mejor gastronomía limeña',
      image: '/images/idro.jpg',
      price: 110,
      duration: '3 horas',
      includes: [
        'Visita al Bosque El Olivar',
        'Recorrido por el Parque Bicentenario',
        'Galerías y murales artísticos',
        'Degustación en restaurante de autor'
      ]
    },
    {
      id: 3,
      title: 'Parapente en Miraflores',
      description: 'Vive la emoción de volar sobre los acantilados de Lima',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 150,
      duration: '2 horas',
      includes: ['Equipo profesional', 'Instructor certificado', 'Fotos y videos', 'Certificado de vuelo']
    }
  ];

  const handleReserveExperience = (experience) => {
    setSelectedExperience(experience);
    setShowBookingModal(true);
  };

  return (
    <section className="experiences" id="experiencias">
      <div className="container">
        <div className="section-header">
          <h2>Experiencias en Lima</h2>
          <p className="section-subtitle">
            Descubre lo mejor de la capital peruana con nuestras experiencias exclusivas
          </p>
        </div>
        
        <div className="experiences-grid">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card">
              <div className="experience-image">
                <img src={exp.image} alt={exp.title} />
                <div className="experience-price">${exp.price}/persona</div>
              </div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <div className="experience-details">
                  <span className="duration"> {exp.duration}</span>
                </div>
                <div className="experience-includes">
                  <h4>Incluye:</h4>
                  <ul>
                    {exp.includes.map((item, index) => (
                      <li key={index}> {item}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="btn-primary"
                  onClick={() => handleReserveExperience(exp)}
                >
                  Reservar Experiencia
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        type="experience"
        item={selectedExperience}
      />
    </section>
  );
};

export default Experiences;