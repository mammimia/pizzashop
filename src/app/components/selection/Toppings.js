import React from 'react';
import Topping from './Topping';

const Toppings = ({ toppings }) => {
  return (
    <>
      <div>Choose topping</div>
      <div>
        {toppings.map((topping, index) => (
          <Topping key={index} topping={topping} />
        ))}
      </div>
    </>
  );
};

export default Toppings;
