// components/Stats/Stats.jsx
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '98%', label: 'Clientes Satisfechos' },
    { number: '4.9', label: 'Calificación promedio' },
    { number: '250+', label: 'Habitaciones' },
    { number: '2010', label: 'Año de fundación' },
    { number: '24/7', label: 'Servicio' }
  ];

  return (
    <section className="stats" id="estadisticas">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros Logros</h2>
          <p className="section-subtitle">Cifras que respaldan nuestra excelencia en servicio</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;