// src/Components/FloatingContactButton/FloatingContactButton.jsx
import React, { useState } from 'react';
import { submitContactForm } from '../../services/api';
import { useNotification } from '../../Context/NotificationContext'; // Ruta corregida

const FloatingContactButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showNotification } = useNotification();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      showNotification('¡Gracias por contactarnos! Te responderemos pronto.', 'success');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
      setIsFormVisible(false);
    } catch (error) {
      showNotification('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="floating-contact">
        <button 
          className="floating-button"
          onClick={() => setIsFormVisible(!isFormVisible)}
          title="Contactar"
        >
          {isFormVisible ? '✕' : '📩'}
        </button>
      </div>

      {isFormVisible && (
        <div className="contact-form-overlay" onClick={() => setIsFormVisible(false)}>
          <div className="contact-form-modal" onClick={(e) => e.stopPropagation()}>
            <div className="form-header">
              <h3>Contacto Rápido</h3>
              <button className="close-form" onClick={() => setIsFormVisible(false)}>×</button>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nombre completo *"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <textarea
                  placeholder="Mensaje *"
                  name="mensaje"
                  rows="3"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
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
      )}
    </>
  );
};

export default FloatingContactButton;