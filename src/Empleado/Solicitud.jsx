import { useNavigate } from 'react-router-dom';

const Solicitud = () => {

  const navigate = useNavigate();

  const cerrarSesion = () => {

    alert('Sesión cerrada exitosamente');
    navigate('/');
  };

  const solicitud = () => {

    alert('Solicitud enviada exitosamente');
    navigate('/empleado');
  };
  


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
    <header>
            <nav class="navbar navbar-dark bg-dark" style={{width: '100%', padding: '1rem 2rem'}}>
                <h1 style={{color:'White', paddingRight:'1150px'}}>Turnify</h1>
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={cerrarSesion}>Cerrar Sesion</button>
            </nav>
    </header>
    <textarea placeholder='Escribe tu solicitud aqui' style={{width: '600px', height: '200px', borderRadius: '15px'}}></textarea>
        <select>
            <option value="jutifi">Justificacion</option>
            <option value="cambio">Cambio de Turno</option>
        </select>
        <button style={buttonStyle} type='submit' onClick={solicitud}>Hacer Solicitud</button>
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

export default Solicitud;
