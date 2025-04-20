import React, { useState } from 'react';

const mensajesMock = [
  {
    id: 1,
    remitente: 'Juan Pérez',
    asunto: 'Cambio de turno',
    fecha: '2024-09-20',
  },
];

const Buzon = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📥 Bandeja de Entrada</h1>
      
      <div style={styles.buzon}>
        <div style={styles.listaMensajes}>
          {mensajesMock.map((msg) => (
            <div 
              key={msg.id} 
              style={styles.card}
            >
              <h3>{msg.asunto}</h3>
              <p><strong>De:</strong> {msg.remitente}</p>
              <p style={styles.fecha}>{msg.fecha}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },
  title: {
    textAlign: 'center',
    color: '#4c00b4',
    marginBottom: '30px'
  },
  buzon: {
    display: 'flex',
    gap: '30px'
  },
  listaMensajes: {
    width: '35%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    overflowY: 'auto',
    maxHeight: '500px'
  },
  card: {
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
    marginBottom: '15px',
    cursor: 'pointer'
  },
  fecha: {
    fontSize: '12px',
    color: '#999'
  },
  detalleMensaje: {
    width: '65%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    minHeight: '200px'
  }
};

export default Buzon;
