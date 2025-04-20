import { useNavigate } from 'react-router-dom';

const Administrador = ({ nombreEmpleado, cargoEmpleado }) => {
  const navigate = useNavigate();


  const cerrarSesion = () => {

    alert('Sesión cerrada exitosamente');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Bienvenido a Turnify</h1>
      <h2>Perfil del Empleado</h2>
      
      {/* Marco de perfil */}
      <div style={{
        width: '600px', padding: '20px', borderRadius: '15px', border: '1px solid #ddd', textAlign: 'center'
      }}>
        <h3>👤 Nombre: {nombreEmpleado}</h3>
        <h4>🏷️ Cargo: {cargoEmpleado}</h4>

        {/* Botones de acción */}
        <button onClick={cerrarSesion} style={buttonStyle}>Cerrar Sesión</button>
        <button style={buttonStyle}>Ver Turnos</button>
        <button style={buttonStyle}>Asignar Turnos</button>
        <button style={buttonStyle}>Agregar Empleado</button>
        <button style={buttonStyle}>Eliminar Empleado</button>
        <button style={buttonStyle}>Modificar Empleado</button>
        <button style={buttonStyle}>Ver Empleado</button>
        <button style={buttonStyle}>Buzon de mensajes</button>


      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px', 
  margin: '10px', 
  backgroundColor: '#4CAF50', 
  color: 'white', 
  border: 'none', 
  borderRadius: '5px',
  cursor: 'pointer'
};

export default Administrador;
