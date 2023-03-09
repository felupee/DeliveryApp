import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import CheckoutItem from './CheckoutItem';
import StorageContext from '../Context/StorageContext';

function CheckoutList({ total }) {
  const { cartStorage, setCartStorage } = useContext(StorageContext);
  const [itens, setItens] = useState(cartStorage);

  const handleRemove = (index) => {
    const updatedItens = itens.filter((p, i) => i !== index);
    setItens(updatedItens);
  };

  useEffect(() => {
    setCartStorage(itens);
  }, [itens]);

  return (
    <table>
      <thead>
        <tr>
          <th>
            Finalizar pedido
          </th>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      {itens.map((item, index) => (
        <tbody key={ index }>
          <CheckoutItem
            index={ index }
            item={ item }
            handleRemove={ handleRemove }
          />
        </tbody>
      ))}
      <tfoot>
        <tr>
          <th>Total: </th>
          <td>{total.toFixed(2).replace('.', ',')}</td>
        </tr>
      </tfoot>
    </table>
  );
}

CheckoutList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ),
}.isRequired;

export default CheckoutList;
