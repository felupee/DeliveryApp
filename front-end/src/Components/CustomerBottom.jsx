import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StorageContext from '../Context/StorageContext';

export default function CustomerBottom() {
  const { cartStorage } = useContext(StorageContext);

  const navigate = useNavigate();

  const total = cartStorage.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(',', '.'));
    return acc + price;
  }, 0);

  const isDisabled = cartStorage.length === 0;

  return (
    <section>
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        {total.toFixed(2).replace('.', ',')}
      </span>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ isDisabled }
      >
        Carrinho
      </button>
    </section>
  );
}
