'use client';

import react, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
