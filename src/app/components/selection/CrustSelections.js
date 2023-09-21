import React from 'react';
import { pizzaCrusts } from './PizzaCurst';

const CrustSelections = ({ crust, setCrust }) => {
  return (
    <div className="flex justify-center items-center lg:justify-start">
      <div className="flex gap-x-12 mb-8 font-medium">
        {Object.values(pizzaCrusts).map((pc) => (
          <CrustSelection
            key={pc.label}
            value={pc}
            crust={crust}
            setCrust={setCrust}
          />
        ))}
      </div>
    </div>
  );
};

const CrustSelection = ({ value, crust, setCrust }) => {
  return (
    <label className="flex items-center gap-x-2 cursor-pointer">
      <input
        className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary cursor-pointer"
        type="radio"
        name="crust"
        value={value}
        onChange={() => setCrust(value)}
        checked={crust === value}
      />
      {value?.label}
    </label>
  );
};
export default CrustSelections;
