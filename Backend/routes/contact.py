from flask import Blueprint, request, jsonify
from models.database import get_db_connection
from services.email_service import send_contact_email, send_booking_email
import sqlite3

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/contact', methods=['POST'])
def handle_contact():
    try:
        data = request.get_json()
        
        # Validar datos requeridos
        if not data or 'nombre' not in data or 'email' not in data or 'mensaje' not in data:
            return jsonify({'error': 'Faltan campos requeridos: nombre, email y mensaje'}), 400
        
        name = data['nombre']
        email = data['email']
        phone = data.get('telefono', '')
        message = data['mensaje']
        
        # Guardar en base de datos
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)',
            (name, email, phone, message)
        )
        conn.commit()
        conn.close()
        
        # Enviar email
        email_sent = send_contact_email(name, email, phone, message)
        
        return jsonify({
            'message': 'Mensaje recibido correctamente',
            'email_sent': email_sent
        }), 200
        
    except sqlite3.Error as e:
        return jsonify({'error': 'Error de base de datos: ' + str(e)}), 500
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor: ' + str(e)}), 500

@contact_bp.route('/booking', methods=['POST'])
def handle_booking():
    try:
        data = request.get_json()
        
        # Validar datos requeridos
        if not data or 'name' not in data or 'email' not in data:
            return jsonify({'error': 'Faltan campos requeridos: nombre y email'}), 400
        
        # Guardar en base de datos
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            '''INSERT INTO bookings 
            (name, email, phone, check_in, check_out, guests, room_type, experience_type, message) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
            (
                data['name'],
                data['email'],
                data.get('telefono', ''),
                data.get('checkIn', ''),
                data.get('checkOut', ''),
                data.get('guests', 1),
                data.get('roomType', ''),
                data.get('experience', ''),
                data.get('message', '')
            )
        )
        conn.commit()
        conn.close()
        
        # Enviar email
        email_sent = send_booking_email(data)
        
        return jsonify({
            'message': 'Reserva recibida correctamente',
            'email_sent': email_sent
        }), 200
        
    except sqlite3.Error as e:
        return jsonify({'error': 'Error de base de datos: ' + str(e)}), 500
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor: ' + str(e)}), 500