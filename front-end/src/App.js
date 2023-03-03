import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Customer from './pages/Customer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Customer /> } />
    </Routes>
  );
}

export default App;
