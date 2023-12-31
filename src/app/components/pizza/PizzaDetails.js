import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import CrustSelections from '../selection/CrustSelections';
import { pizzaCrusts } from '../selection/PizzaCurst';
import { pizzaSizes } from '../selection/PizzaSize';
import SizeSelections from '../selection/SizeSelections';
import Toppings from '../selection/Toppings';
import { CartContext } from '../../context/CartContext';

const PizzaDetails = ({ pizza, closeModal }) => {
  const [size, setSize] = useState(pizzaSizes.SMALL);
  const [crust, setCrust] = useState(pizzaCrusts.TRADATIONAL);
  const [additionalToppings, setAdditionalToppings] = useState([]);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleCartAdd = () => {
    addToCart({
      pizza,
      size,
      crust,
      additionalToppings,
      totalPrice
    });
    closeModal();
  };

  useEffect(() => {
    switch (size) {
      case pizzaSizes.SMALL:
        setTotalPrice(parseFloat(pizza.priceSm + toppingPrice).toFixed(2));
        break;
      case pizzaSizes.MEDIUM:
        setTotalPrice(parseFloat(pizza.priceMd + toppingPrice).toFixed(2));
        break;
      case pizzaSizes.LARGE:
        setTotalPrice(parseFloat(pizza.priceLg + toppingPrice).toFixed(2));
        break;
      default:
        break;
    }
  }, [size, toppingPrice, pizza]);

  useEffect(() => {
    if (additionalToppings.length > 0) {
      const toppingPrice = additionalToppings.reduce(
        (acc, curr) => acc + curr?.price,
        0
      );
      setToppingPrice(toppingPrice);
    } else {
      setToppingPrice(0);
    }
  }, [additionalToppings]);

  const detailText = [
    size?.diameter,
    crust.label.toLowerCase() + ' crust'
  ].join(', ');

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
      <div className="lg:flex-1 flex justify-center items-center">
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image
            className="mx-auto relative"
            width={450}
            height={450}
            src={pizza.image}
            alt=""
            priority={1}
          />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="flex-1 overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            <div className="font-semibold">
              <h2 className="capitalize text-3xl mb-1">{pizza.name}</h2>
              <div className="mb-6 text-lg font-medium">
                <span>{detailText}</span>
              </div>
            </div>
            <SizeSelections image={pizza.image} size={size} setSize={setSize} />
            <CrustSelections crust={crust} setCrust={setCrust} />
            <Toppings
              toppings={pizza.toppings}
              setAdditionalToppings={setAdditionalToppings}
            />
          </div>
        </div>
        <div className="h-full flex items-center px-2 lg:items-end">
          <button
            className="btn btn-lg gradient w-full flex justify-center gap-x-2"
            onClick={handleCartAdd}
          >
            <div>Add to cart for</div>
            <div>$ {totalPrice}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
