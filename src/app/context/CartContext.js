'use client';

import react, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const getExistingItemIndex = (item) => {
    return cartItems.findIndex(
      (cartItem) =>
        cartItem.pizza.id === item.pizza.id &&
        cartItem.size === item.size &&
        cartItem.price === item.price &&
        JSON.stringify(cartItem.additionalToppings) ===
          JSON.stringify(item.additionalToppings) &&
        cartItem.crust === item.crust
    );
  };

  const addToCart = (item) => {
    const existingItemIndex = getExistingItemIndex(item);

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
    const existingItemIndex = getExistingItemIndex(item);

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(existingItemIndex, 1);
      setCartItems(newCartItems);
    }
  };

  const increaseQuantity = (item) => {
    const existingItemIndex = getExistingItemIndex(item);

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  const decreaseQuantity = (item) => {
    const existingItemIndex = getExistingItemIndex(item);

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      if (newCartItems[existingItemIndex].quantity > 1) {
        newCartItems[existingItemIndex].quantity -= 1;
        setCartItems(newCartItems);
      } else {
        newCartItems.splice(existingItemIndex, 1);
        setCartItems(newCartItems);
      }
    }
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
        getTotalPrice,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
