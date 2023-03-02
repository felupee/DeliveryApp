import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link
        to="/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/products"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </Link>
      <h1 data-testid="customer_products__element-navbar-user-full-name">
        Nome do usuário
      </h1>
      <Link
        to="/products"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Link>
    </nav>
  );
}
