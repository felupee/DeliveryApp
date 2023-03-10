import { useEffect, useState } from 'react';
import api from '../api';

export default function ClientOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    api.get('/sales')
      .then((response) => setSales(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {sales.map((item) => (
        <div
          key={ item.id }
          data-testid={ `customer_orders__element-order-id-${item.id}` }
        >
          <div>
            <span
              data-testid={ `customer_orders__element-delivery-status-${item.id}` }
            >
              {item.status}
            </span>
            <span
              data-testid={ `customer_orders__element-order-date-${item.id}` }
            >
              {item.saleDate}
            </span>
            <span
              data-testid={ `customer_orders__element-card-price-${item.id}` }
            >
              {item.totalPrice}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
