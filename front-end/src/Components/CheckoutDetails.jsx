import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import StorageContext from '../Context/StorageContext';
import MainContext from '../Context/MainContext';

export default function CheckoutDetails({ totalPrice }) {
  const [orderDetails, setOrderDetails] = useState({
    address: '',
    number: '',
    seller: '',
  });
  const { cartStorage } = useContext(StorageContext);
  const { storageData } = useContext(MainContext);

  const resetInputs = () => {
    setOrderDetails({
      address: '',
      number: '',
      seller: '',
    });
  };
  const saleProductList = cartStorage.map((item) => {
    const obj = {
      productId: item.productId,
      quantity: item.quantity,
    };
    return obj;
  });

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(totalPrice);

    api.post('/sales', {
      userId: storageData.userId,
      sellerId: 2,
      totalPrice,
      deliveryAddress: orderDetails.address,
      deliveryNumber: orderDetails.number,
      status: 'Pendente',
      saleProductList,
    }, {
      headers: {
        Authorization: storageData.token,
      },
    }).then((response) => {
      resetInputs();
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

CheckoutDetails.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
