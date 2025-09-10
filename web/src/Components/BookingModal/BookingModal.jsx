// src/Components/BookingModal/BookingModal.jsx
import React, { useState } from "react";
import { submitBooking } from '../../services/api';
import { useNotification } from '../../Context/NotificationContext'; // Ruta corregida

export default function BookingModal({ isOpen, onClose, type, item }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "standard",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showNotification } = useNotification();

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const bookingData = { ...formData };

      if (type === 'experience' && item) {
        bookingData.experience = item.title;
        bookingData.experiencePrice = item.price;
      } else if (type === 'room' && item) {
        bookingData.room = item.name;
        bookingData.roomPrice = item.price;
      }

      await submitBooking(bookingData);
      
      showNotification(
        type === 'experience' 
          ? '¡Experiencia reservada con éxito! Te contactaremos pronto.' 
          : '¡Habitación reservada con éxito! Te contactaremos pronto.',
        'success'
      );

      setFormData({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        roomType: "standard",
        message: ""
      });
      onClose();
    } catch (error) {
      showNotification('Error al enviar la reserva. Por favor, intenta nuevamente.', 'error');
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-overlay" onClick={onClose}>
      <div className="contact-form-modal" onClick={e => e.stopPropagation()}>
        <div className="form-header">
          <h3>
            {type === 'experience' ? 'Reservar Experiencia' : 'Reservar Habitación'}
            {item && `: ${item.name || item.title}`}
          </h3>
          <button className="close-form" onClick={onClose}>✖</button>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="ejemplo@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          {type === 'room' && (
            <>
              <div className="form-group">
                <label>Fecha de Entrada</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label>Fecha de Salida</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label>Huéspedes</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label>Tipo de habitación</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value="standard">Estándar</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
            </>
          )}

          {type === 'experience' && (
            <div className="form-group">
              <label>Fecha preferida</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          )}

          <div className="form-group">
            <label>Mensaje adicional</label>
            <textarea
              name="message"
              placeholder="¿Algún requerimiento especial?"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar Reserva'}
          </button>
        </form>
      </div>
    </div>
  );
}