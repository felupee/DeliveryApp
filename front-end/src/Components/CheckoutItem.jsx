import React from 'react';
import PropTypes from 'prop-types';

export default function CheckoutItem({ index, item, handleRemove }) {
  const subTotal = (
    (item.quantity * parseFloat(item.price.replace(',', '.'))).toFixed(2)
  );
  const formattedSubTotal = parseFloat(subTotal).toFixed(2).toString().replace('.', ',');
  return (
    <tr key={ index }>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        {index + 1}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {item.name}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        {item.quantity}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        {`R$${item.price}`}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        {`R$${formattedSubTotal}`}
      </td>
      <td>
        <button
          type="button"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ () => handleRemove(index) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CheckoutItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,

};
