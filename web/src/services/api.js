// services/api.js
const API_BASE_URL = 'http://localhost:5000/api';

// Función para hacer peticiones al backend
const makeApiCall = async (endpoint, method = 'GET', data = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la petición API:', error);
    throw error;
  }
};

// Funciones para enviar datos al backend
export const submitContactForm = async (formData) => {
  // Adaptar los nombres de campos al backend
  const backendData = {
    nombre: formData.nombre,
    email: formData.email,
    telefono: formData.telefono,
    mensaje: formData.mensaje
  };
  
  return await makeApiCall('/contact', 'POST', backendData);
};

export const submitBooking = async (bookingData) => {
  // Adaptar los nombres de campos al backend
  const backendData = {
    name: bookingData.name,
    email: bookingData.email,
    phone: bookingData.telefono,
    check_in: bookingData.checkIn,
    check_out: bookingData.checkOut,
    guests: bookingData.guests,
    room_type: bookingData.roomType,
    experience_type: bookingData.experience,
    message: bookingData.message
  };
  
  return await makeApiCall('/booking', 'POST', backendData);
};

// Funciones para datos estáticos (se mantienen igual)
export const fetchRooms = async () => {
  return [
    {
      id: 1,
      name: 'Suite Presidencial',
      description: 'La máxima expresión de lujo con vistas panorámicas, jacuzzi privado y terraza exclusiva.',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: ['Jacuzzi privado', 'Terraza exclusiva', 'Vistas panorámicas', 'Desayuno gourmet', 'Servicio de mayordomo'],
      size: '120 m²',
      occupancy: 3,
      bedType: 'King Size'
    },
    {
      id: 2,
      name: 'Habitación Deluxe',
      description: 'Amplia y elegante con amenities de lujo y atención personalizada.',
      price: 750,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: ['Balcón privado', 'Minibar premium', 'Atención 24/7', 'Acceso a spa', 'TV pantalla plana'],
      size: '65 m²',
      occupancy: 2,
      bedType: 'Queen Size'
    },
    {
      id: 3,
      name: 'Suite Familiar',
      description: 'Espaciosa suite perfecta para familias con áreas separadas y comodidades especiales.',
      price: 950,
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      features: ['Área familiar', 'Juegos infantiles', 'Cuna disponible', 'Servicio de niñera', 'Cocina pequeña'],
      size: '90 m²',
      occupancy: 4,
      bedType: '2 Queen Size'
    }
  ];
};

export const fetchTestimonials = async () => {
  return [
    {
      id: 1,
      name: 'María González',
      comment: 'Una experiencia increíble. El servicio impecable y las instalaciones de primera. Volveremos sin duda.',
      rating: 5,
      date: '2024-12-15',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      comment: 'Perfecto para viajes de negocios. Las salas de reuniones están excelentemente equipadas y el personal es muy atento.',
      rating: 5,
      date: '2024-11-28',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      comment: 'Celebramos nuestro aniversario aquí y fue mágico. La suite tenía vistas espectaculares y nos prepararon una sorpresa especial.',
      rating: 5,
      date: '2024-11-15',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];
};

// Función de simulación de disponibilidad
export const checkAvailability = async (roomId, dates) => {
  // Simulamos disponibilidad (80% de probabilidad de haber disponibilidad)
  return Math.random() > 0.2;
};
