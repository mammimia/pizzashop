import React from 'react';
import Image from 'next/image';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';

const CartItem = ({ cartItem }) => {
  return (
    <div className="select-none">
      <div className="flex gap-x-4 mb-2">
        <div className="flex justify-center items-center">
          <Image src={cartItem.pizza.image} width={90} height={90} alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-y-1">
          <div className="text-lg capitalize font-bold">
            {cartItem.pizza.name}
          </div>
          <div className="flex flex-col gap-y-1 capitalize font-medium text-[15px]">
            <div>{cartItem.crust.label} crust</div>
            <div className="mb-2">{cartItem.size.label} size</div>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
              <BiMinus />
            </div>
            <div className="font-semibold flex flex-1 max-w-[30px] justify-center text-sm">
              1
            </div>
            <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
              <BiPlus />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div
            className="text-2xl flex justify-center items-center self-end cursor-pointer
             hover:scale-110 duration:100 transition-all text-orange"
          >
            <IoCloseOutline />
          </div>
          <div>
            <span className="text-[17px] font-medium font-robotoCondensed">
              {parseFloat(cartItem.totalPrice * 1).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 p-6 border-b border-black/10">
        <div className="font-semibold">
          Toppings: {cartItem.additionalToppings?.length === 0 && 'None'}
        </div>
        {cartItem.additionalToppings?.map((topping, index) => {
          return (
            <div
              key={index}
              className="capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none"
            >
              {topping.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;