import React from 'react';
import CustomerBottom from '../Components/CustomerBottom';
import Navbar from '../Components/Navbar';
import ProductList from '../Components/ProductList';

export default function Customer() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ProductList />
        <CustomerBottom />
      </main>
    </>
  );
}
