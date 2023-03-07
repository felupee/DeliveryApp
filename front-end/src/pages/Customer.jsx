import React from 'react';
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
      </main>
    </>
  );
}
