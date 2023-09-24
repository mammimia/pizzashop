import { CartContext } from '@/app/context/CartContext';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import CheckoutModal from '../checkout/CheckoutModal';

const CartBottom = () => {
  const { cartItems, setIsOpen, getTotalPrice } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <button
              className="btn btn-lg gradient font-semibold flex justify-center"
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10">
          <div className="font-semibold">Your cart is empty</div>
        </div>
      )}

      <CheckoutModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CartBottom;
