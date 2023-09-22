'use client';
import React, { useContext } from 'react';
import { BsHandbagFill } from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';

const CartMobileIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div
      className="bg-tertiary w-[72px] h-[72px] rounded-full flex 
    justify-center items-center text-white cursor-pointer fixed right-[10%]
     bottom-[5%] z-20 lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <BsHandbagFill className="text-4xl" />
      <span
        className="absolute text-white bottom-3 right-4 gradient w-5 h-5 flex justify-center
       items-center rounded-full font-robotoCondensed text-[13px]"
      >
        3
      </span>
    </div>
  );
};

export default CartMobileIcon;
