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
    <div className='container-general'>
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required/>
        </div>

        <div className='remember-forgot'>
          <label><input type="checkbox" />Remember me</label>
          <a href='#'>Olvidaste tu contraseña?</a>
        </div>
        <div className='input-box'>
          <label>Rol:</label><br />
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="admin">Administrador</option>
            <option value="empleado">Empleado</option>
        </select>
        <button type='submit'>Iniciar Sesion</button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Login;
