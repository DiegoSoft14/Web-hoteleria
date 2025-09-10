// components/Amenities/Amenities.jsx
import React from 'react';

const Amenities = () => {
  const amenities = [
    {
      id: 1,
      nombre: 'Concierge Exclusivo',
      icono: '',
      descripcion: 'Nuestro equipo de concierge está disponible 24/7 para planificar cada detalle de tu estancia y experiencias en Lima'
    },
    {
      id: 2,
      nombre: 'Transporte Privado',
      icono: '',
      descripcion: 'Servicio de traslado exclusivo en vehículos de lujo desde/hacia el aeropuerto y destinos dentro de la ciudad'
    },
    {
      id: 3,
      nombre: 'Spa Signature',
      icono: '',
      descripcion: 'Tratamientos únicos inspirados en tradiciones peruanas con productos naturales de los Andes y la Amazonía'
    },
    {
      id: 4,
      nombre: 'Centro de Negocios',
      icono: '',
      descripcion: 'Espacios de trabajo totalmente equipados con tecnología de punta y salas de reuniones ejecutivas'
    },
    {
      id: 5,
      nombre: 'Experiencias Gastronómicas',
      icono: '',
      descripcion: 'Tours culinarios privados, clases de cocina con chefs peruanos y catas de pisco exclusivas'
    },
    {
      id: 6,
      nombre: 'Wellness & Fitness',
      icono: '',
      descripcion: 'Gimnasio con equipos Technogym, estudios de yoga con instructores certificados y programas wellness personalizados'
    }
  ];

  return (
    <section className="amenities" id="servicios">
      <div className="container">
        <div className="section-header">
          <h2>Servicios Exclusivos</h2>
          <p className="section-subtitle">Experiencias personalizadas que transforman tu estadía en recuerdos inolvidables</p>
        </div>
        
        <div className="amenities-grid">
          {amenities.map(amenity => (
            <div key={amenity.id} className="amenity-card">
              <div className="amenity-icon">{amenity.icono}</div>
              <div className="amenity-content">
                <h3>{amenity.nombre}</h3>
                <p>{amenity.descripcion}</p>
                <span className="amenity-link">Descubrir más →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;