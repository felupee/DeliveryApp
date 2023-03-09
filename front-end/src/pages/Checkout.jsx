import React, { useEffect, useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import CheckoutList from '../Components/CheckoutList';
import CheckoutDetails from '../Components/CheckoutDetails';
import StorageContext from '../Context/StorageContext';

export default function Checkout() {
  const { cartStorage, setCartStorage } = useContext(StorageContext);
  const [itens] = useState(cartStorage);
  const total = cartStorage.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(',', '.'));
    return acc + price;
  }, 0);

  useEffect(() => {
    setCartStorage(itens);
  }, [itens]);

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
