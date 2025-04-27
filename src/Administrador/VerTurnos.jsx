import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const VerTurnos = () => {
    const [turnos, setTurnos] = useState([
      { id: 1, nombre: 'Pedro Pérez', fecha: '2025-04-24', hora: '08:00 - 16:00', departamento: 'Ventas', estado: 'Asignado' },
      { id: 2, nombre: 'María López', fecha: '2025-04-25', hora: '09:00 - 17:00', departamento: 'Marketing', estado: 'Pendiente' },
    ]);

    const navigate = useNavigate();

    const cerrarSesion = () => {

        alert('Sesión cerrada exitosamente');
        navigate('/');
      };
      

    return(
        <div>
            <header>
                <nav class="navbar navbar-dark bg-dark" style={{width: '100%', padding: '1rem 2rem'}}>
                    <h1 style={{color:'White', paddingRight:'1150px'}}>Turnify</h1>
                    <button class="btn btn-outline-success my-2 my-sm-0" onClick={cerrarSesion}>Cerrar Sesion</button>
                </nav>
            </header>
        <div style={{display: 'flex', gap: '1rem'}}>
        {turnos.map(turno => (
            <div key={turno.id} class="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{turno.nombre}</h5>
                    <p className="card-text">
                        {turno.fecha} - {turno.hora} <br />
                        Departamento: {turno.departamento} <br />
                        Estado: {turno.estado}
                        </p>
                    <a href="#" class="btn btn-primary">Editar Turno</a>
                </div>
            </div>
        ))}
        </div>
        </div>
    );
}

export default VerTurnos