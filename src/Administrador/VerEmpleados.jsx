import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Empleados = () => {
    const [datos, setDatos] = useState([
        {id: 1, nombre: 'Pedro', apellidos:'Perez Pereira', rut: '14.322.543-1', fechaNacimiento: '14-02-1990'},
        {id: 1, nombre: 'Juan', apellidos:'Monsalves Vejar', rut: '18.142.223-K', fechaNacimiento: '25-11-1997'}
    ]);

    const navigate = useNavigate();

    const [nuevo, setNuevo] = useState({nombre: '', apellidos: '', rut: '', fechaNacimiento: ''});

    const handleAgregar = () => {
        if (nuevo.nombre.trim() && nuevo.apellidos.trim() && nuevo.rut.trim() && nuevo.fechaNacimiento) {
          const nuevoEmpleado = {
            ...nuevo,
            id: datos.length ? datos[datos.length - 1].id + 1 : 1,
          };
          setDatos([...datos, nuevoEmpleado]);
          setNuevo({ nombre: '', apellidos: '', rut: '', fechaNacimiento: '' });
        }
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevo((prev) => ({ ...prev, [name]: value }));
    };
    const cerrarSesion = () => {

      alert('Sesión cerrada exitosamente');
      navigate('/');
    };
    
    return (
      
        <div className="p-4 max-w-3xl mx-auto">
           <header>
            <nav class="navbar navbar-dark bg-dark" style={{width: '100%', padding: '1rem 2rem'}}>
              <h1 style={{color:'White', paddingRight:'1150px'}}>Turnify</h1>
              <button class="btn btn-outline-success my-2 my-sm-0" onClick={cerrarSesion}>Cerrar Sesion</button>
            </nav>
            </header>
          <h2 className="text-2xl font-bold mb-4">Empleados</h2>
    
          <table className="w-full table-auto border mb-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-1">ID</th>
                <th className="border px-3 py-1">Nombre</th>
                <th className="border px-3 py-1">Apellidos</th>
                <th className="border px-3 py-1">RUT</th>
                <th className="border px-3 py-1">Fecha Nac.</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((emp) => (
                <tr key={emp.id}>
                  <td className="border px-3 py-1 text-center">{emp.id}</td>
                  <td className="border px-3 py-1">{emp.nombre}</td>
                  <td className="border px-3 py-1">{emp.apellidos}</td>
                  <td className="border px-3 py-1">{emp.rut}</td>
                  <td className="border px-3 py-1">{emp.fechaNacimiento}</td>
                </tr>
              ))}
            </tbody>
          </table>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nuevo.nombre}
              onChange={handleInputChange}
              className="border p-2"
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              value={nuevo.apellidos}
              onChange={handleInputChange}
              className="border p-2"
            />
            <input
              type="text"
              name="rut"
              placeholder="RUT"
              value={nuevo.rut}
              onChange={handleInputChange}
              className="border p-2"
            />
            <input
              type="date"
              name="fechaNacimiento"
              value={nuevo.fechaNacimiento}
              onChange={handleInputChange}
              className="border p-2"
            />
            <button
              onClick={handleAgregar}
              className="btn btn-success"
            >
              Agregar Empleado
            </button>
          </div>
        </div>
      );
}
export default Empleados;