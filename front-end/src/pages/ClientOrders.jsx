import { useEffect, useState } from 'react';
import api from '../api';

export default function ClientOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    api.get('/sales')
      .then((response) => setSales(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  const formatDate = (date) => new Date(date).toLocaleDateString('pt-br');

  return (
    <div>
      {sales.map((item) => (
        <div key={ item.id }>
          <p
            data-testid={ `customer_orders__element-order-id-${item.id}` }
          >
            {item.id}
          </p>
          <p
            data-testid={ `customer_orders__element-delivery-status-${item.id}` }
          >
            {item.status}
          </p>
          <p
            data-testid={ `customer_orders__element-order-date-${item.id}` }
          >
            {formatDate(item.saleDate)}
          </p>
          <p
            data-testid={ `customer_orders__element-card-price-${item.id}` }
          >
            {item.totalPrice.replace('.', ',')}
          </p>
        </div>

      ))}
    </div>
  );
}
