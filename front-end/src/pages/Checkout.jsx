import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import CheckoutList from '../Components/CheckoutList';
import CheckoutDetails from '../Components/CheckoutDetails';
import StorageContext from '../Context/StorageContext';

export default function Checkout() {
  const { cartStorage } = useContext(StorageContext);
  const total = cartStorage.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(',', '.'));
    return acc + price;
  }, 0);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CheckoutList total={ total } />
        <CheckoutDetails total={ total } />
      </main>
    </>
  );
}
