// components/Rooms/Rooms.jsx
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const rooms = [
    {
      id: 1,
      name: 'Habitación Standard',
      description: 'Confortable y acogedora, perfecta para estancias cortas.',
      price: 120,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Wi-Fi gratuito', 'TV pantalla plana', 'Aire acondicionado', 'Baño privado'],
      size: '25 m²',
      occupancy: 2,
      bedType: 'Cama doble'
    },
    {
      id: 2,
      name: 'Habitación Deluxe',
      description: 'Amplia y elegante con amenities de lujo y atención personalizada.',
      price: 190,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Vistas privilegiadas', 'Minibar', 'Zona de trabajo', 'Amenities de lujo'],
      size: '35 m²',
      occupancy: 2,
      bedType: 'Cama de Lujo'
    },
    {
      id: 3,
      name: 'Suite Ejecutiva',
      description: 'Espacio amplio con área de estar separada, ideal para viajes de negocios.',
      price: 280,
      image: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Sala de estar', 'Escritorio ejecutivo', 'Acceso a lounge', 'Desayuno incluido'],
      size: '50 m²',
      occupancy: 2,
      bedType: 'Cama de Lujo'
    },
    {
      id: 4,
      name: 'Suite Presidencial',
      description: 'La máxima expresión de lujo con todas las comodidades y servicios exclusivos.',
      price: 450,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Terraza privada', 'Jacuzzi', 'Servicio de mayordomo', 'Vistas panorámicas'],
      size: '85 m²',
      occupancy: 3,
      bedType: 'Cama de Lujo'
    }
  ];

  const openDetails = (room) => {
    setSelectedRoom(room);
    setShowDetailsModal(true);
  };

  const handleReserve = (room) => {
    setSelectedRoom(room);
    setShowDetailsModal(false); // cerrar detalles
    setShowBookingModal(true); // abrir reserva
  };

  return (
    <section className="rooms" id="habitaciones">
      <div className="container">
        <div className="section-header">
          <h2>Nuestras Habitaciones</h2>
          <p className="section-subtitle">Descubre el confort perfecto para tu estancia</p>
        </div>
        
        <div className="rooms-grid">
          {rooms.map(room => (
            <div key={room.id} className="room-card">
              <div className="room-image">
                <img src={room.image} alt={room.name} />
                <div className="room-overlay">
                  <button 
                    className="btn-view-details"
                    onClick={() => openDetails(room)}
                  >
                    Ver Detalles
                  </button>
                </div>
                <div className="room-price">${room.price}/noche</div>
              </div>
              <div className="room-details">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <button 
                  className="btn-primary"
                  onClick={() => handleReserve(room)}
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detalles */}
      {showDetailsModal && selectedRoom && (
        <div className="room-modal active">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowDetailsModal(false)}>×</button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedRoom.image} alt={selectedRoom.name} />
              </div>
              <div className="modal-details">
                <h2>{selectedRoom.name}</h2>
                <p className="modal-price">${selectedRoom.price}/noche</p>
                <p>{selectedRoom.description}</p>
                <div className="modal-features">
                  <h4>Características</h4>
                  <ul>
                    {selectedRoom.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-info">
                  <div className="info-item">
                    <strong>Tamaño:</strong> {selectedRoom.size}
                  </div>
                  <div className="info-item">
                    <strong>Capacidad:</strong> {selectedRoom.occupancy} {selectedRoom.occupancy === 1 ? 'huésped' : 'huéspedes'}
                  </div>
                  <div className="info-item">
                    <strong>Cama:</strong> {selectedRoom.bedType}
                  </div>
                </div>
                <button 
                  className="btn-primary" 
                  onClick={() => handleReserve(selectedRoom)}
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Reserva */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        type="room"
        item={selectedRoom}
      />
    </section>
  );
};

export default Rooms;
