import React from 'react';
import Topping from './Topping';

const Toppings = ({ toppings, setAdditionalToppings }) => {
  return (
    <>
      <div className="mb-4 text-xl font-semibold">Choose topping</div>
      <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
        {toppings.map((topping, index) => (
          <Topping
            key={index}
            topping={topping}
            setAdditionalToppings={setAdditionalToppings}
          />
        ))}
      </div>
    </>
  );
};

export default Toppings;
