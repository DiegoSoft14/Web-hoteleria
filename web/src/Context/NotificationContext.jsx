// src/Context/NotificationContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Crear el componente Notification aquí mismo para evitar problemas de rutas
const Notification = ({ message, type = 'success', onClose, duration = 5000 }) => {
  React.useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '✅';
    }
  };

  return (
    <div className={`notification ${type}`} style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: 'white',
      borderRadius: '12px',
      padding: '16px 20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minWidth: '300px',
      maxWidth: '400px',
      zIndex: '10000',
      animation: 'slideIn 0.3s ease-out',
      borderLeft: '4px solid',
      borderLeftColor: type === 'success' ? '#27ae60' : 
                      type === 'error' ? '#e74c3c' : 
                      type === 'warning' ? '#f39c12' : '#3498db'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <span style={{ fontSize: '20px', marginRight: '12px', flexShrink: 0 }}>
          {getIcon()}
        </span>
        <span style={{ color: '#2c3e50', fontSize: '14px', lineHeight: '1.4', fontWeight: '500' }}>
          {message}
        </span>
      </div>
      <button 
        onClick={onClose} 
        style={{ 
          background: 'none', 
          border: 'none', 
          fontSize: '18px', 
          color: '#7f8c8d', 
          cursor: 'pointer', 
          padding: 0, 
          marginLeft: '15px', 
          flexShrink: 0 
        }}
      >
        ×
      </button>
    </div>
  );
};

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success', duration = 5000) => {
    setNotification({ message, type, duration });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification, hideNotification }}>
      {children}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          duration={notification.duration}
          onClose={hideNotification}
        />
      )}
    </NotificationContext.Provider>
  );
};