"use client"
import React from 'react';
import { useCart } from '../context/cartContext/CartContext';

const CartItem = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItem;