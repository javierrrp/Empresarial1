import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import AdminPanel from './Administrador/AdminPanel';
import EmployeePanel from './Empleado/EmployeePanel';
import Solicitud from './Empleado/Solicitud';
import Buzon from './Administrador/Buzon';
import VerTurnos from './Administrador/VerTurnos';
import VerTurnosEmpleados from './Empleado/VerTurnos';
import Empleados from './Administrador/VerEmpleados'
import AsignarTurno from './Administrador/AsignarTurno';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/empleado" element={<EmployeePanel />} />
        <Route path='/solicitud' element={<Solicitud />} />
        <Route path='/buzon' element={<Buzon />} />
        <Route path='/lista' element={<Empleados />} />
        <Route path='/turnos' element={<VerTurnos />} />
        <Route path='/verturnos' element={<VerTurnosEmpleados />} />
        <Route path='/asignar' element= {<AsignarTurno />} />

      </Routes>
    </Router>
    
  );
}

export default App;
