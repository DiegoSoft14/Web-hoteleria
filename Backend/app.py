from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from models.database import init_db
from routes.contact import contact_bp
import os

def create_app():
    app = Flask(__name__)
    
    # Inicializar base de datos
    init_db()
    
    # Habilitar CORS (permite requests desde React)
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:5173", "http://127.0.0.1:5173"])
    
    # Registrar blueprints
    app.register_blueprint(contact_bp, url_prefix='/api')
    
    # Ruta principal
    @app.route('/')
    def index():
        return jsonify({
            'message': 'API del Hotel Hyatt Centric San Isidro Lima',
            'endpoints': {
                'contact': '/api/contact',
                'booking': '/api/booking'
            },
            'status': 'running'
        })
    
    # Evitar error de favicon
    @app.route('/favicon.ico')
    def favicon():
        return '', 204
    
    return app

if __name__ == '__main__':
    app = create_app()
    print("=" * 50)
    print("Servidor Flask iniciado")
    print("URL: http://localhost:5000")
    print("Endpoints disponibles:")
    print("  - POST /api/contact")
    print("  - POST /api/booking")
    print("=" * 50)
    app.run(debug=True, port=5000)