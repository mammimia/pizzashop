import { CartContext } from '@/app/context/CartContext';
import { useContext } from 'react';

const CartBottom = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  return (
    <>
      {cartItems?.length > 0 ? (
        <div className="px-6 py-3 lg:py-6 mt-auto">
          <div
            className="flex items-center justify-between mb-6 text-lg 
          font-semibold font-robotoCondensed"
          >
            <div>Total:</div>
            <div>$ {getTotalPrice()}</div>
          </div>

          <div className="flex flex-col gap-y-3">
            <button className="btn btn-lg gradient font-semibold flex justify-center">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10">
          <div className="font-semibold">Your cart is empty</div>
        </div>
      )}
    </>
  );
};

export default CartBottom;
