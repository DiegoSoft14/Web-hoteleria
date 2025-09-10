import React, { useState, useEffect } from 'react';

const Header = ({ currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#inicio" className="logo" onClick={(e) => {
            e.preventDefault();
            scrollToSection('inicio');
          }}>
            <span className="logo-main">HYATT CENTRIC</span>
            <span className="logo-sub">SAN ISIDRO LIMA</span>
          </a>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {['inicio', 'habitaciones', 'nosotros', 'servicios', 'galeria'].map(section => (
                <li key={section}>
                  <a 
                    href={`#${section}`} 
                    className={`nav-link ${currentSection === section ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                  >
                    {section === 'nosotros' ? 'Nosotros' : 
                     section === 'habitaciones' ? 'Habitaciones' :
                     section === 'servicios' ? 'Servicios' :
                     section === 'galeria' ? 'Galería' :
                     'Inicio'}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn-reservar" onClick={() => scrollToSection('habitaciones')}>Reservar Ahora</button>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;