import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [rol, setRol] = useState('admin'); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    if (rol === 'admin') {
      navigate('/admin');
    } else {
      navigate('/empleado');
    }
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className='header'>
        <div className='text'>Inicia sesion</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <label>Usuario:</label><br />
          <input type="text"/>
        </div>
        <div className='input'>
          <label>Contraseña:</label><br />
          <input type="password"  />
        </div>
        <div className='input'>
          <label>Rol:</label><br />
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="admin">Administrador</option>
            <option value="empleado">Empleado</option>
        </select>
      </div>
        <div className='submit-container'>
            <button type="submit" className='submit'>Ingresar</button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default Login;
