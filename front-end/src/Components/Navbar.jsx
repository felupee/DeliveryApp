import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../Context/MainContext';

export default function Navbar() {
  const { storageData } = useContext(MainContext);

  return (
    <nav>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </Link>
      <span data-testid="customer_products__element-navbar-user-full-name">
        {storageData.name}
      </span>
      <Link
        onClick={ () => localStorage.clear() }
        to="/login"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Link>
    </nav>
  );
}
