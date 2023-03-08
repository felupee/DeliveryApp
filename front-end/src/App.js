import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Customer from './pages/Customer';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import StorageProvider from './Provider/StorageProvider';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <StorageProvider>
        <Route path="/customer/products" element={ <Customer /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
      </StorageProvider>
      <Route path="/admin/manage" element={ <Admin /> } />
    </Routes>
  );
}

export default App;
