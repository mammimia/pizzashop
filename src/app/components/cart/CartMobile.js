'use client';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartTop from './CartTop';
import CartBottom from './CartBottom';
import CartItem from './CartItem';

const CartMobile = () => {
  const { isOpen, cartItems } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'bottom-0' : '-bottom-full'
      } bg-white fixed w-full h-full left-0 z-20 transition-all duration-300 lg:hidden flex flex-col`}
    >
      <CartTop />
      <div
        className={`px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh] overflow-y-scroll
       scrollbar-thin scrollbar-thumb-secondary ${
         cartItems?.length >= 3
           ? 'scrollbar-trach-white/10'
           : ' scrollbar-track-transparent'
       }`}
      >
        {cartItems?.map((cartItem, index) => {
          return <CartItem key={index} cartItem={cartItem} />;
        })}
      </div>
      <CartBottom />
    </div>
  );
};

export default CartMobile;
