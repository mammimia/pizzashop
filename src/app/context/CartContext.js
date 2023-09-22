'use client';

import react, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newItem = {
      ...item,
      additionalToppings: item.additionalToppings.sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{ isOpen, setIsOpen, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
