import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Topping = ({ topping, setAdditionalToppings }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleTopping = () => {
    if (isChecked) {
      setAdditionalToppings((prev) =>
        prev.filter((t) => {
          return topping.id !== t.id;
        })
      );
    } else {
      setAdditionalToppings((prev) => [...prev, topping]);
    }
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`${
        isChecked ? 'border-orange' : ''
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image
        className="mb-2"
        src={topping.image}
        alt=""
        width={70}
        height={70}
      />
      <div className="text-sm capitalize text-center font-medium">
        {topping.name}
      </div>
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        checked={isChecked}
        onChange={handleTopping}
      />
      <div
        className={`${
          isChecked ? 'opacity-100' : 'opacity-0'
        } absolute top-1 right-1`}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};

export default Topping;
