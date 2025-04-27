import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const VerTurnosEmpleados = () => {

    const navigate = useNavigate();

    const [turnos] = useState([
            {fecha: '25-04-2025', hora: '08:00 - 16:00', puesto: 'Caja', estado: 'Confirmado'},
            {fecha: '26-04-2025', hora: '09:00 - 17:00', puesto: 'Reposicion', estado: 'Confirmado'}
        ]);
    

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
        
        <table className="table table-striped" style={{width: '100%'}}>
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-1">Fecha</th>
                <th className="border px-3 py-1">Hora</th>
                <th className="border px-3 py-1">Puesto</th>
                <th className="border px-3 py-1">Estado</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((emp) => (
                <tr key={emp.id}>
                  <td className="border px-3 py-1 text-center">{emp.fecha}</td>
                  <td className="border px-3 py-1">{emp.hora}</td>
                  <td className="border px-3 py-1">{emp.puesto}</td>
                  <td className="border px-3 py-1">{emp.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
    )
}

export default VerTurnosEmpleados;