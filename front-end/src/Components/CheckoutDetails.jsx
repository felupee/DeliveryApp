import React, { useState, useContext } from 'react';
import axios from 'axios';
import StorageContext from '../Context/StorageContext';
import MainContext from '../Context/MainContext';

export default function CheckoutDetails({ total }) {
  const [orderDetails, setOrderDetails] = useState({
    address: '',
    number: '',
    seller: '',
  });
  const { cartStorage } = useContext(StorageContext);
  const { products } = useContext(MainContext);

  const resetInputs = () => {
    setOrderDetails({
      address: '',
      number: '',
      seller: '',
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/customer/checkout', {
      userId: cartStorage.id,
      sellerId: orderDetails.seller,
      deliveryAddress: orderDetails.address,
      deliveryNumber: orderDetails.number,
      totalPrice: total,
      products,
    }).then((response) => {
      resetInputs();
      setStorageData(response.data);
      const { id } = response.data;
      navigate(`/customer/orders/${id}`);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <form onSubmit={ handleRegister }>
        <select
          type="select"
          data-testid="customer_checkout__select-seller"
          value={ orderDetails.seller }
          onChange={ ({ target }) => setOrderDetails({
            ...orderDetails,
            seller: target.value,
          }) }
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="admin">Administrador</option>
        </select>
        <input
          type="text"
          data-testid="customer_checkout__input-address"
          placeholder="Digite seu endereço"
          value={ orderDetails.address }
          onChange={ ({ target }) => setOrderDetails({
            ...orderDetails,
            address: target.value,
          }) }
        />
        <input
          type="text"
          data-testid="customer_checkout__input-address-number"
          placeholder="Digite o número"
          value={ orderDetails.number }
          onChange={ ({ target }) => setOrderDetails({
            ...orderDetails,
            number: target.value,
          }) }
        />
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </form>
    </section>
  );
}
