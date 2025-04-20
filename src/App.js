import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import AdminPanel from './AdminPanel';
import EmployeePanel from './EmployeePanel';
import Solicitud from './Solicitud';
import Buzon from './Buzon';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/empleado" element={<EmployeePanel />} />
        <Route path='/solicitud' element={<Solicitud />} />
        <Route path='/buzon' element={<Buzon />} />
      </Routes>
    </Router>
  );
}

export default App;
