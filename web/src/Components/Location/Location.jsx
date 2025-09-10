// components/Location/Location.jsx
import React from 'react';

const Location = () => {
  return (
    <section className="location" id="ubicacion">
      <div className="container">
        <div className="section-header">
          <h2>Nuestra Ubicación</h2>
          <p className="section-subtitle">Encuéntranos en el corazón de San Isidro</p>
        </div>
        
        <div className="location-content">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.162982273841!2d-77.0373273247801!3d-12.100914188154987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c89f1291bb0b%3A0x6f853551c13e63c7!2sHyatt%20Centric%20San%20Isidro%20Lima!5e0!3m2!1ses!2spe!4v1725927048306!5m2!1ses!2spe" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Ubicación Hyatt Centric San Isidro Lima"
            ></iframe>
          </div>
          
          <div className="location-info">
            <h3>Hyatt Centric San Isidro Lima</h3>
            <p className="location-address">Av. Jorge Basadre 367, San Isidro 15073, Lima, Perú</p>
            
            <div className="location-details">
              <div className="location-item">
                <h4>Cómo llegar</h4>
                <p>25 min desde el aeropuerto</p>
                <p>15 min desde Miraflores</p>
                <p>10 min desde el centro financiero</p>
              </div>
              
              <div className="location-item">
                <h4>Transporte</h4>
                <p>Taxi disponible 24/7</p>
                <p>Estacionamiento gratuito</p>
                <p>Servicio de valet parking</p>
              </div>

              <div className="location-item">
                <h4>Contacto</h4>
                <p>+51 1 611 1234</p>
                <p>lima.centric@hyatt.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
