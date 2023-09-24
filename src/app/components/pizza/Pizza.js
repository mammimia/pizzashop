'use client';
import Image from 'next/image';
import { useState } from 'react';
import PizzaModal from './PizzaModal';

const Pizza = ({ pizza }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="group py-2 px-4 xl:py-4 rounded-xl">
      <Image
        className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        onClick={() => setIsModalVisible(true)}
        width={270}
        height={270}
        src={pizza.image}
        alt=""
        priority={1}
      />

      <div onClick={() => setIsModalVisible(true)}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>

      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="hidden lg:flex text-xl font-semibold">
          starts at {pizza.priceSm}
        </div>
        <button
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
          onClick={() => setIsModalVisible(true)}
        >
          Choose
        </button>

        <button
          className="btn btn-sm gradient text-sm lg:hidden px-3"
          onClick={() => setIsModalVisible(true)}
        >
          starts at {pizza.priceSm}
        </button>
      </div>

      <PizzaModal
        pizza={pizza}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default Pizza;
