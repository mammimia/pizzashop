'use client';

import react, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === item.size &&
        cartItem.price === item.price &&
        JSON.stringify(cartItem.additionalToppings) ===
          JSON.stringify(item.additionalToppings) &&
        cartItem.crust === item.crust
    );

    if (existingItemIndex === -1) {
      const newItem = {
        ...item,
        additionalToppings: item.additionalToppings.sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
        quantity: 1
      };

      setCartItems([...cartItems, newItem]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    }
    setIsOpen(true);
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + parseFloat(item.totalPrice) * item.quantity;
    }, 0);
    return parseFloat(totalPrice).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
