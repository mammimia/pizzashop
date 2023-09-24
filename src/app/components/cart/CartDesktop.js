'use client';
import { CartContext } from '@/app/context/CartContext';
import React, { useContext } from 'react';
import CartTop from './CartTop';
import CartItem from './CartItem';
import CartBottom from './CartBottom';

const CartDesktop = () => {
  const { isOpen, cartItems } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'left-0' : '-left-full'
      } bg-white fixed top-0 bottom-0 w-[500px] shadow-2xl hidden
       lg:flex flex-col transition-all duration-300 z-20`}
    >
      <CartTop />

      <div
        className={`px-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 mt-8
         overflow-y-scroll scrollbar-thin ${
           cartItems.length > 3 &&
           'scrollbar-track-black/10 scrollbar-thumb-secondary'
         }`}
      >
        {cartItems.map((item, index) => {
          return <CartItem key={index} cartItem={item} />;
        })}
      </div>

      <CartBottom />
    </div>
  );
};

export default CartDesktop;
