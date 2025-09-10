import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from config import Config

def send_contact_email(name, email, phone, message):
    try:
        # Configurar el mensaje
        msg = MIMEMultipart()
        msg['From'] = Config.SMTP_USERNAME
        msg['To'] = Config.ADMIN_EMAIL
        msg['Subject'] = f'Nuevo mensaje de contacto de {name}'
        
        # Crear el cuerpo del mensaje
        body = f"""
        Has recibido un nuevo mensaje de contacto desde el sitio web de Hyatt Centric San Isidro Lima:
        
        Nombre: {name}
        Email: {email}
        Teléfono: {phone if phone else 'No proporcionado'}
        
        Mensaje:
        {message}
        
        ---
        Este es un mensaje automático, por favor no responder directamente.
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Enviar el email con manejo mejorado de errores
        server = smtplib.SMTP(Config.SMTP_SERVER, Config.SMTP_PORT)
        server.ehlo()  # Identificarse con el servidor
        server.starttls()  # Iniciar cifrado TLS
        server.ehlo()  # Re-identificarse después de TLS
        
        # Verificar credenciales antes de intentar login
        print(f"Intentando conectar con: {Config.SMTP_USERNAME}")
        
        server.login(Config.SMTP_USERNAME, Config.SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        
        print("✓ Correo de contacto enviado con éxito")
        return True
        
    except smtplib.SMTPAuthenticationError as e:
        print(f"✗ Error de autenticación: {e}")
        print("Verifica:")
        print("1. Que la verificación en 2 pasos esté ACTIVADA en Gmail")
        print("2. Que hayas generado una CONTRASEÑA DE APLICACIÓN")
        print("3. Que uses la contraseña de aplicación (16 caracteres) no tu contraseña normal")
        return False
    except Exception as e:
        print(f"✗ Error enviando correo: {e}")
        return False

def send_booking_email(booking_data):
    try:
        # Determinar el tipo de reserva
        booking_type = "Habitación" if booking_data.get('room_type') else "Experiencia"
        
        # Configurar el mensaje
        msg = MIMEMultipart()
        msg['From'] = Config.SMTP_USERNAME
        msg['To'] = Config.ADMIN_EMAIL
        msg['Subject'] = f'Nueva reserva de {booking_type} - {booking_data["name"]}'
        
        # Crear el cuerpo del mensaje
        body = f"""
        Has recibido una nueva reserva desde el sitio web de Hyatt Centric San Isidro Lima:
        
        Tipo: {booking_type}
        Nombre: {booking_data['name']}
        Email: {booking_data['email']}
        Teléfono: {booking_data.get('phone', 'No proporcionado')}
        """
        
        if booking_data.get('check_in'):
            body += f"Check-in: {booking_data['check_in']}\n"
        if booking_data.get('check_out'):
            body += f"Check-out: {booking_data['check_out']}\n"
        if booking_data.get('guests'):
            body += f"Huéspedes: {booking_data['guests']}\n"
        if booking_data.get('room_type'):
            body += f"Tipo de habitación: {booking_data['room_type']}\n"
        if booking_data.get('experience'):
            body += f"Experiencia: {booking_data.get('experience', 'No especificada')}\n"
        
        body += f"""
        Mensaje adicional:
        {booking_data.get('message', 'Ninguno')}
        
        ---
        Este es un mensaje automático, por favor no responder directamente.
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Enviar el email con manejo mejorado de errores
        server = smtplib.SMTP(Config.SMTP_SERVER, Config.SMTP_PORT)
        server.ehlo()
        server.starttls()
        server.ehlo()
        
        print(f"Intentando conectar con: {Config.SMTP_USERNAME}")
        
        server.login(Config.SMTP_USERNAME, Config.SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        
        print("✓ Correo de reserva enviado con éxito")
        return True
        
    except smtplib.SMTPAuthenticationError as e:
        print(f"✗ Error de autenticación: {e}")
        print("Verifica:")
        print("1. Que la verificación en 2 pasos esté ACTIVADA en Gmail")
        print("2. Que hayas generado una CONTRASEÑA DE APLICACIÓN")
        print("3. Que uses la contraseña de aplicación (16 caracteres) no tu contraseña normal")
        return False
    except Exception as e:
        print(f"✗ Error enviando correo de reserva: {e}")
        return False