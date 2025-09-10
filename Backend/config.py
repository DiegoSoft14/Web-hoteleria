import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

class Config:
    # Configuración de base de datos
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    DATABASE_PATH = os.path.join(BASE_DIR, 'instance', 'hotel.db')
    
    # Configuración de email (cambia estos valores con tus credenciales reales)
    SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
    SMTP_PORT = int(os.getenv('SMTP_PORT', 587))
    SMTP_USERNAME = os.getenv('SMTP_USERNAME', 'tu_email@gmail.com')
    SMTP_PASSWORD = os.getenv('SMTP_PASSWORD', 'tu_contraseña_de_aplicacion')
    ADMIN_EMAIL = os.getenv('ADMIN_EMAIL', 'diegoespinoza1122@gmail.com')