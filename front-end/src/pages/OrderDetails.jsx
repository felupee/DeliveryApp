import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

import StorageContext from '../Context/StorageContext';
import formatDate from '../utils/date.utils';

export default function OrderDetails() {
  const [sale, setSale] = useState({});

  const { id } = useParams();
  const { cartStorage } = useContext(StorageContext);

  const getSales = async () => {
    const response = await api.get(`/sales/details/${id}`);
    setSale(response.data);
  };

  useEffect(() => {
    const getData = async () => {
      await getSales();
    };

    getData();
  }, []);

  const total = cartStorage.reduce((acc, item) => {
    const price = (parseFloat(item.price.replace(',', '.')) * item.quantity);
    return acc + price;
  }, 0);

  return (
    <section>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {sale?.id}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {sale?.seller?.name}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { formatDate(sale?.saleDate) }
      </p>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-delivery-status${id}`
        }
      >
        { sale?.status }
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
          {cartStorage.map((item, index) => {
            const subtotal = parseFloat(item.price.replace(',', '.')) * item.quantity;
            return (
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
                  { subtotal.toFixed(2).replace('.', ',') }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <p
          data-testid="customer_order_details__element-order-total-price"
        >
          {total.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </section>
  );
}
