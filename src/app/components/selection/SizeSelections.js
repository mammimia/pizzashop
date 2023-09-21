import Image from 'next/image';
import React from 'react';
import { pizzaSizes } from './PizzaSize';

const SizeSelections = ({ image, size, setSize }) => {
  return (
    <div className="mx-auto max-w-sm lg:max-w-none flex items-center justify-center lg:justify-start">
      <div className="flex gap-x-12 items-baseline mb-10 font-medium">
        {Object.values(pizzaSizes).map((ps) => (
          <SizeSelection
            key={ps.label}
            image={image}
            value={ps}
            size={size}
            setSize={setSize}
            imageSize={ps.imageSize}
          />
        ))}
      </div>
    </div>
  );
};

const SizeSelection = ({ image, value, size, setSize, imageSize }) => {
  const isSelected = value === size;
  return (
    <label className="flex flex-col items-center gap-x-2 cursor-pointer">
      <Image
        className={`${
          isSelected
            ? 'border-2 border-orange rounded-full'
            : 'border-transparent filter saturate-[.1]'
        } mb-1`}
        src={image}
        alt=""
        width={imageSize}
        height={imageSize}
      />
      <input
        className="appearance-none"
        type="radio"
        name="size"
        value={value}
        checked={isSelected}
        onChange={() => setSize(value)}
      />
      {value.label}
    </label>
  );
};

export default SizeSelections;
