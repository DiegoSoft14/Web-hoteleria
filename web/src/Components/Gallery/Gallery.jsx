// components/Gallery/Gallery.jsx
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Fachada moderna del hotel Hyatt Centric San Isidro',
    category: 'Exteriores'
  },
  {
    id: 2,
    src: '/images/comida.jpg',
    alt: 'Restaurante gourmet con ambiente elegante',
    category: 'Gastronomía'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Suite presidencial con terraza privada',
    category: 'Habitaciones'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Spa con tratamientos signature peruanos',
    category: 'Wellness'
  },
  {
    id: 5,
     src: '/images/eventos.jpg',
    alt: 'Sala de eventos para bodas y reuniones',
    category: 'Eventos'
  },
  {
    id: 6,
     src: '/images/piscina1.jpg',
    alt: 'Piscina infinity con vista panorámica',
    category: 'Piscina'
  }
];

  const categories = ['Todos', 'Exteriores', 'Habitaciones', 'Gastronomía', 'Wellness', 'Eventos', 'Piscina'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredImages = activeCategory === 'Todos' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <div className="section-header">
          <h2>Galería </h2>
          <p className="section-subtitle">Descubre los espacios y experiencias que hacen único al Hyatt Centric San Isidro</p>
        </div>
        
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <span className="image-category">{image.category}</span>
                  <h4>{image.alt}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal active" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-info">
              <h3>{selectedImage.alt}</h3>
              <span className="modal-category">{selectedImage.category}</span>
            </div>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;