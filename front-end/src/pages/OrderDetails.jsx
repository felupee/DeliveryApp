import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

import StorageContext from '../Context/StorageContext';

export default function OrderDetails() {
  const [sale, setSale] = useState({});
  const [seller, setSeller] = useState({});

  const { id } = useParams();
  const { cartStorage } = useContext(StorageContext);

  const getSales = async () => {
    const response = await api.get(`/sales/details/${id}`);
    setSale(response.data);
  };

  const getSeller = async () => {
    const response = await api.get(`/seller/${sale.sellerId}`);
    setSeller(response.data);
  };

  useEffect(() => {
    const getData = async () => {
      await getSales();

      await getSeller();
    };

    getData();
  }, []);

  return (
    <section>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {sale.id}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {seller.name}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        teste
      </p>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-delivery-status${id}`
        }
      >
        teste
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </button>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {cartStorage.map((item, index) => (
            <tr key={ index }>
              <td>
                {index + 1}
              </td>
              <td>
                {item.name}
              </td>
              <td>
                {item.quantity}
              </td>
              <td>
                {item.price}
              </td>
              <td>
                { (item.quantity * parseFloat(item.price.replace(',', '.'))).toFixed(2) }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p
          data-testid="customer_order_details__element-order-total-price"
        >
          teste
        </p>
      </div>
    </section>
  );
}
