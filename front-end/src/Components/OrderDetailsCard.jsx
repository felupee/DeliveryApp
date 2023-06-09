import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import api from '../api';
import formatDate from '../utils/date.utils';

export default function OrderDetailsCard({ userRole }) {
  const [sale, setSale] = useState({});

  const { id } = useParams();

  const getSale = async () => {
    const response = await api.get(`/sales/details/${id}`);
    setSale(response.data);
  };

  useEffect(() => {
    const getData = async () => {
      await getSale();
    };

    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p
        data-testid={ `${userRole}_order_details__element-order-details-label-order-id` }
      >
        {sale?.id}
      </p>
      {userRole === 'customer' ? (
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {sale?.seller?.name}
        </p>)
        : (
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
          >
            Preparar
          </button>

        )}
      <p
        data-testid={
          `${userRole}_order_details__element-order-details-label-order-date`
        }
      >
        { formatDate(sale?.saleDate) }
      </p>
      <p
        data-testid={
          `${userRole}_order_details__element-order-details-label-delivery-status${id}`
        }
      >
        { sale?.status }
      </p>
      {(userRole === 'customer') ? (
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled
        >
          Marcar como entregue
        </button>
      ) : (
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled
        >
          Saiu para entrega
        </button>
      )}
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
          {sale?.products?.map((item, index) => {
            const subtotal = item.price * item.SalesProducts.quantity;
            return (
              <tr key={ item.SalesProducts.productId }>
                <td>
                  {index + 1}
                </td>
                <td>
                  { item.name }
                </td>
                <td>
                  { item.SalesProducts.quantity }
                </td>
                <td>
                  { item.price.toString().replace('.', ',') }
                </td>
                <td>
                  { subtotal.toFixed(2).toString().replace('.', ',') }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <p
          data-testid={ `${userRole}_order_details__element-order-total-price` }
        >
          {sale?.totalPrice?.toString().replace('.', ',')}
        </p>
      </div>
    </div>
  );
}

OrderDetailsCard.propTypes = {
  userRole: PropTypes.string.isRequired,
};
