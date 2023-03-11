import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Customer from './pages/Customer';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import ClientOrders from './pages/ClientOrders';
import OrderDetails from './pages/OrderDetails';
import Seller from './pages/Seller';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Customer /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders" element={ <ClientOrders /> } />
      <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
      <Route path="/seller/orders" element={ <Seller /> } />
      <Route path="/admin/manage" element={ <Admin /> } />
    </Routes>
  );
}

export default App;
