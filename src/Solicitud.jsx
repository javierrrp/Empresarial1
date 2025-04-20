import { useNavigate } from 'react-router-dom';

const Solicitud = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
    <textarea placeholder='Escribe tu solicitud aqui' style={{width: '600px', height: '200px', borderRadius: '15px'}}></textarea>
        <select>
            <option value="jutifi">Justificacion</option>
            <option value="cambio">Cambio de Turno</option>
        </select>
        <button style={buttonStyle} type='submit'>Hacer Solicitud</button>
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
