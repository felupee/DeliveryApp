import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import ProductList from '../Components/ProductList';
import MainContext from '../Context/MainContext';

export default function Customer() {
  const { products } = useContext(MainContext);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ProductList products={ products } />
      </main>
    </>
  );
}
