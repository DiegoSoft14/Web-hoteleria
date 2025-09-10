// components/Contact/Contact.jsx
import React, { useState } from 'react';
import { submitContactForm } from '../../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');

      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="section-header">
          <h2>Contacto</h2>
          <p className="section-subtitle">Estamos aquí para ayudarte</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="contact-item">
              <strong>📍 Dirección:</strong>
              <p>Avenida Principal 123, San Isidro, Lima</p>
            </div>
            <div className="contact-item">
              <strong>📞 Teléfono:</strong>
              <p>+51 (123) 456-7890</p>
            </div>
            <div className="contact-item">
              <strong>✉️ Email:</strong>
              <p>reservas@hyattsanisidro.com</p>
            </div>
            <div className="contact-item">
              <strong>🕒 Horario de Recepción:</strong>
              <p>Las 24 horas, los 7 días de la semana</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">¿En qué podemos ayudarte? *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
                placeholder="Cuéntanos cómo podemos hacer tu estancia más agradable..."
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
