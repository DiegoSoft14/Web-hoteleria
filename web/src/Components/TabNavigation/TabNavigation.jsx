// components/TabNavigation/TabNavigation.jsx
import React, { useState } from 'react';
import Rooms from '../Rooms/Rooms';
import Nosotros from '../Nosotros/Nosotros';
import Amenities from '../Amenities/Amenities';
import Gallery from '../Gallery/Gallery';
import Experiences from '../Experiences/Experiences';
import Testimonials from '../Testimonials/Testimonials';

const TabNavigation = ({ testimonialsData }) => {
  const [activeTab, setActiveTab] = useState('inicio');

  const tabs = [
    { id: 'inicio', label: 'Inicio', content: <InicioContent testimonialsData={testimonialsData} /> },
    { id: 'habitaciones', label: 'Habitaciones', content: <Rooms /> },
    { id: 'nosotros', label: 'Nosotros', content: <Nosotros /> },
    { id: 'servicios', label: 'Servicios', content: <Amenities /> },
    { id: 'galeria', label: 'Galería', content: <Gallery /> },
  ];

  function InicioContent({ testimonialsData }) {
    return (
      <div className="inicio-content">
        <Experiences />
        <Testimonials testimonials={testimonialsData} />
      </div>
    );
  }

  return (
    <div className="tab-navigation">
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabNavigation;