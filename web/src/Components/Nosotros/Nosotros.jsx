import React from 'react';

const Nosotros = () => {
  return (
    <section className="nosotros" id="nosotros">
      <div className="container">
        <div className="section-header">
          <h2>Nuestra Ubicación</h2>
          <p className="section-subtitle">HYATT CENTRIC SAN ISIDRO LIMA</p>
        </div>
        
        <div className="nosotros-content">
          <div className="ubicacion-info">
            <div className="ubicacion-destacado">
              <h3> Ubicación Privilegiada</h3>
              <p className="direccion-destacada">Avenida Santa María 125, San Isidro, Lima</p>
            </div>
            
            <div className="ubicacion-detalles">
              <div className="detalle-item">
                <h4> Cómo Llegar</h4>
                <p>25 min desde el Aeropuerto Internacional Jorge Chávez</p>
                <p>15 min desde el distrito de Miraflores</p>
                <p>5 min desde el centro financiero de San Isidro</p>
              </div>
              
              <div className="detalle-item">
                <h4> Ventajas de la Ubicación</h4>
                <p>En el corazón de la zona financiera y corporativa</p>
                <p>Cercano a los mejores restaurantes y centros comerciales</p>
                <p>Acceso rápido a principales vías de la ciudad</p>
              </div>
              
              <div className="detalle-item">
                <h4> Contacto Directo</h4>
                <p>Teléfono: +51 123 456 789</p>
                <p>Email: reservas@hyattsanisidro.com</p>
                <p>WhatsApp: +51 987 654 321</p>
              </div>
            </div>
          </div>
          
          <div className="mapa-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.137721136066!2d-77.0503908247801!3d-12.102253288153597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9ac8a4cbf1f%3A0x3f39250ff83547a6!2sSan%20Isidro%2C%20Lima%2015036!5e0!3m2!1ses!2spe!4v1701799968083!5m2!1ses!2spe" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Ubicación Hyatt Centric San Isidro Lima"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;