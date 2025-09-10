// components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/Hyatt",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hyatt/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/hyatt",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/hyatt/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Información del hotel */}
          <div className="footer-section">
            <div className="logo">
              <span className="logo-main">HYATT CENTRIC</span>
              <span className="logo-sub">SAN ISIDRO LIMA</span>
            </div>
            <p>
              Disfrute de una experiencia única en nuestro lujoso hotel,
              donde la elegancia se encuentra con la comodidad y el servicio
              excepcional.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#habitaciones">Habitaciones</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer-section">
            <h3>Servicios</h3>
            <ul>
              <li><a href="#servicios">Restaurante Gourmet</a></li>
              <li><a href="#servicios">Spa & Bienestar</a></li>
              <li><a href="#servicios">Piscina Infinity</a></li>
              <li><a href="#servicios">Gimnasio Completo</a></li>
              <li><a href="#servicios">Salones para Eventos</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-images">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick(social.url);
                  }}
                >
                  <img src={social.icon} alt={social.name} width="32" height="32" />
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Av. Javier Prado 2345, San Isidro, Lima</p>
            <p>+51 987 654 321</p>
            <p>legal@hyattsanisidro.com</p>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="footer-bottom">
          <p>
            &copy; 2024 Hyatt Centric San Isidro Lima. Todos los derechos reservados.
          </p>
          <div className="legal-links">
            <Link to="/terminos-y-privacidad?tab=terms">
              Términos y Condiciones
            </Link>
            <Link to="/terminos-y-privacidad?tab=privacy">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
