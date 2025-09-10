// components/TermsAndPrivacy/TermsAndPrivacy.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TermsAndPrivacy = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("terms");

  // Detecta ?tab=terms o ?tab=privacy en la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab === "privacy" || tab === "terms") {
      setActiveTab(tab);
    }
  }, [location]);

  return (
    <div className="terms-privacy-container">
      <div className="container">
        <div className="terms-header">
          <h1>Información Legal</h1>
          <p>Conoce nuestros términos y políticas de privacidad</p>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "terms" ? "active" : ""}`}
              onClick={() => setActiveTab("terms")}
            >
              Términos y Condiciones
            </button>
            <button
              className={`tab ${activeTab === "privacy" ? "active" : ""}`}
              onClick={() => setActiveTab("privacy")}
            >
              Política de Privacidad
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "terms" ? (
              <div className="terms-content">
                <div className="last-updated">Última actualización: 15 de Enero, 2024</div>
                
                <section className="section">
                  <h2>1. Aceptación de los Términos</h2>
                  <p>
                    Al acceder y utilizar los servicios de Hyatt Centric San Isidro Lima,
                    usted acepta estar sujeto a estos Términos y Condiciones. Si no está de
                    acuerdo con alguna parte de los términos, no podrá utilizar nuestros
                    servicios.
                  </p>
                </section>

                <section className="section">
                  <h2>2. Reservas y Pagos</h2>
                  <h3>2.1. Proceso de Reserva</h3>
                  <p>
                    Las reservas pueden realizarse a través de nuestro sitio web, por
                    teléfono o mediante agencias de viajes autorizadas. Todas las reservas
                    están sujetas a disponibilidad.
                  </p>
                  <h3>2.2. Política de Pagos</h3>
                  <p>
                    Para garantizar su reserva, se requiere el pago de una anticipación
                    equivalente al 30% del valor total de la estancia. El saldo restante
                    deberá abonarse al momento del check-in.
                  </p>
                  <h3>2.3. Métodos de Pago Aceptados</h3>
                  <p>
                    Aceptamos tarjetas de crédito Visa, MasterCard, American Express,
                    transferencias bancarias y efectivo (soles y dólares americanos).
                  </p>
                </section>

                <section className="section">
                  <h2>3. Política de Cancelación</h2>
                  <h3>3.1. Cancelaciones</h3>
                  <p>
                    Las cancelaciones realizadas con más de 72 horas de antelación a la
                    fecha de llegada recibirán un reembolso completo del depósito.
                    Cancelaciones dentro de las 72 horas previas incurrirán en el cargo de
                    una noche.
                  </p>
                  <h3>3.2. No presentarse</h3>
                  <p>
                    En caso de no presentarse el huésped en la fecha reservada sin previa
                    cancelación, se cobrará el total de la primera noche y la reserva será
                    cancelada automáticamente.
                  </p>
                </section>

                <section className="section">
                  <h2>4. Fecha de Entrada y Fecha de Salida</h2>
                  <p>
                    <strong>Fecha de Entrada:</strong> A partir de las 3:00 PM
                  </p>
                  <p>
                    <strong>Fecha de Salida:</strong> Hasta las 12:00 PM
                  </p>
                  <p>
                    Se podrá solicitar late check-out sujeto a disponibilidad y con cargo
                    adicional después de las 3:00 PM.
                  </p>
                </section>

                <section className="section">
                  <h2>5. Reglas del Hotel</h2>
                  <h3>5.1. Huéspedes</h3>
                  <p>
                    El número máximo de huéspedes por habitación está determinado por la
                    capacidad de cada tipo de alojamiento. No se permiten visitas en las
                    habitaciones después de las 10:00 PM.
                  </p>
                  <h3>5.2. Daños a la Propiedad</h3>
                  <p>
                    Los huéspedes serán responsables por cualquier daño causado a la
                    propiedad del hotel durante su estancia.
                  </p>
                  <h3>5.3. Política de No Fumar</h3>
                  <p>
                    Hyatt Centric San Isidro Lima es un hotel 100% libre de humo. Se
                    aplicarán cargos de limpieza de $250 por violar esta política.
                  </p>
                  <h3>5.4. Mascotas</h3>
                  <p>
                    Se permiten mascotas de hasta 25 kg con cargo adicional de $50 por
                    noche. Se requiere reserva previa.
                  </p>
                </section>

                <section className="section">
                  <h2>6. Limitación de Responsabilidad</h2>
                  <p>
                    El hotel no se hace responsable por pérdida, robo o daño de objetos de
                    valor dejados en las habitaciones. Se recomienda utilizar la caja de
                    seguridad disponible en cada habitación.
                  </p>
                </section>

                <section className="section">
                  <h2>7. Ley Aplicable</h2>
                  <p>
                    Estos términos se rigen por las leyes de la República del Perú.
                    Cualquier disputa será resuelta en los tribunales de Lima.
                  </p>
                </section>

                <section className="section">
                  <h2>8. Modificaciones</h2>
                  <p>
                    Nos reservamos el derecho de modificar estos Términos y Condiciones en
                    cualquier momento. Los cambios entrarán en vigor inmediatamente después
                    de su publicación en nuestro sitio web.
                  </p>
                </section>

                <section className="section contact-section">
                  <h2>Contacto</h2>
                  <p>
                    Para cualquier pregunta sobre estos Términos y Condiciones, por favor
                    contáctenos:
                  </p>
                  <p>📞 Teléfono: +51 987 654 321</p>
                  <p>✉️ Email: legal@hyattsanisidro.com</p>
                  <p>📍 Dirección: Av. Jorge Basadre 367, San Isidro, Lima, Perú</p>
                </section>
              </div>
            ) : (
              <div className="privacy-content">
                <div className="last-updated">Última actualización: 15 de Enero, 2024</div>
                
                <section className="section">
                  <h2>1. Introducción</h2>
                  <p>
                    En Hyatt Centric San Isidro Lima, valoramos su privacidad y nos
                    comprometemos a proteger sus datos personales. Esta política explica
                    cómo recopilamos, usamos y protegemos su información.
                  </p>
                </section>

                <section className="section">
                  <h2>2. Información que Recopilamos</h2>
                  <h3>2.1. Información Personal</h3>
                  <p>Podemos recopilar la siguiente información:</p>
                  <ul>
                    <li>Nombre completo, fecha de nacimiento, género</li>
                    <li>Información de contacto (dirección, email, teléfono)</li>
                    <li>Detalles de pasaporte o documento de identidad</li>
                    <li>Información de pago (tarjetas de crédito/débito)</li>
                    <li>Preferencias de alojamiento y solicitudes especiales</li>
                  </ul>
                  <h3>2.2. Información Automática</h3>
                  <p>Cuando visita nuestro sitio web, recopilamos automáticamente:</p>
                  <ul>
                    <li>Dirección IP y tipo de dispositivo</li>
                    <li>Datos de navegación y páginas visitadas</li>
                    <li>Información a través de cookies y tecnologías similares</li>
                  </ul>
                </section>

                <section className="section">
                  <h2>3. Uso de su Información</h2>
                  <p>Utilizamos su información para:</p>
                  <ul>
                    <li>Procesar reservas y proporcionar servicios</li>
                    <li>Gestionar su cuenta y preferencias</li>
                    <li>Comunicarnos con usted sobre su estancia</li>
                    <li>Mejorar nuestros servicios y experiencia del cliente</li>
                    <li>Enviar ofertas promocionales (con su consentimiento)</li>
                    <li>Cumplir con obligaciones legales</li>
                  </ul>
                </section>

                <section className="section">
                  <h2>4. Compartir Información</h2>
                  <p>Podemos compartir su información con:</p>
                  <ul>
                    <li>Proveedores de servicios necesarios para su estancia</li>
                    <li>Autoridades legales cuando sea requerido por ley</li>
                    <li>
                      Socios comerciales para ofrecerle servicios adicionales (con su
                      consentimiento)
                    </li>
                  </ul>
                  <p>No vendemos ni alquilamos su información personal a terceros.</p>
                </section>

                <section className="section">
                  <h2>5. Cookies y Tecnologías Similares</h2>
                  <p>
                    Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
                    Puede gestionar sus preferencias de cookies a través de la configuración
                    de su navegador.
                  </p>
                </section>

                <section className="section">
                  <h2>6. Seguridad de Datos</h2>
                  <p>
                    Implementamos medidas técnicas y organizativas apropiadas para proteger
                    su información personal contra accesos no autorizados, pérdida o
                    alteración.
                  </p>
                </section>

                <section className="section">
                  <h2>7. Retención de Datos</h2>
                  <p>
                    Conservamos su información personal solo durante el tiempo necesario
                    para cumplir con los fines descritos en esta política, a menos que la
                    ley requiera un período de retención más largo.
                  </p>
                </section>

                <section className="section">
                  <h2>8. Sus Derechos</h2>
                  <p>Usted tiene derecho a:</p>
                  <ul>
                    <li>Acceder a su información personal</li>
                    <li>Solicitar la corrección de datos inexactos</li>
                    <li>Solicitar la eliminación de sus datos personales</li>
                    <li>Oponerse al procesamiento de sus datos</li>
                    <li>Solicitar la portabilidad de sus datos</li>
                    <li>Retirar su consentimiento en cualquier momento</li>
                  </ul>
                  <p>
                    Para ejercer estos derechos, contáctenos en privacy@hyattsanisidro.com
                  </p>
                </section>

                <section className="section">
                  <h2>9. Transferencias Internacionales</h2>
                  <p>
                    Su información puede ser transferida y procesada en países fuera del
                    Perú. Garantizamos que estas transferencias cumplen con las leyes de
                    protección de datos aplicables.
                  </p>
                </section>

                <section className="section">
                  <h2>10. Cambios a esta Política</h2>
                  <p>
                    Podemos actualizar esta política periódicamente. Le notificaremos sobre
                    cambios significativos publicando la nueva política en nuestro sitio web.
                  </p>
                </section>

                <section className="section contact-section">
                  <h2>11. Contacto</h2>
                  <p>
                    Si tiene preguntas sobre esta política de privacidad, por favor
                    contáctenos:
                  </p>
                  <p>📞 Teléfono: +51 1 611 1234</p>
                  <p>✉️ Email: privacy@hyattsanisidro.com</p>
                  <p>📍 Dirección: Av. Jorge Basadre 367, San Isidro, Lima, Perú</p>
                  <p>Att: Oficina de Protección de Datos</p>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacy;
