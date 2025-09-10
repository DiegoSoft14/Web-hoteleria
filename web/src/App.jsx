// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Rooms from './Components/Rooms/Rooms';
import Nosotros from './Components/Nosotros/Nosotros';
import Amenities from './Components/Amenities/Amenities';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import FloatingContactButton from './Components/FloatingContactButton/FloatingContactButton';
import Experiences from './Components/Experiences/Experiences';
import Testimonials from './Components/Testimonials/Testimonials';
import TermsAndPrivacy from './Components/TermsAndPrivacy/TermsAndPrivacy';

import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('inicio');

  // Datos de testimonios
  const testimonialsData = [
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = ['inicio', 'habitaciones', 'nosotros', 'servicios', 'experiencias', 'galeria', 'testimonios'];

      let current = 'inicio';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 150) {
          current = section;
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className="App">
              <Header currentSection={currentSection} />
              <Hero />
              <Rooms />
              <Nosotros />
              <Amenities />
              <Experiences />
              <Testimonials testimonials={testimonialsData} />
              <Gallery />
              <Footer />
              <FloatingContactButton />
            </div>
          }
        />

        {/* Ruta de Términos y Privacidad */}
        <Route path="/terminos-y-privacidad" element={<TermsAndPrivacy />} />
      </Routes>
    </Router>
  );
}

export default App;
