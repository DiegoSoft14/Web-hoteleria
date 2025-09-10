import sqlite3
import os
from config import Config

def get_db_connection():
    # Asegurarse de que el directorio instance existe
    instance_dir = os.path.join(os.path.dirname(__file__), '..', 'instance')
    if not os.path.exists(instance_dir):
        os.makedirs(instance_dir)
        print(f"Directorio creado: {instance_dir}")
    
    conn = sqlite3.connect(Config.DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Crear tabla de mensajes de contacto
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Crear tabla de reservas
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            check_in DATE,
            check_out DATE,
            guests INTEGER,
            room_type TEXT,
            experience_type TEXT,
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    conn.commit()
    conn.close()
    print("✓ Base de datos inicializada correctamente")