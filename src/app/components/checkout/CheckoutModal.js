import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import ModalCloseButton from '../modal/ModalCloseButton';
import { CartContext } from '@/app/context/CartContext';
import Image from 'next/image';
import SuccessMessage from './SuccessMessage';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

Modal.setAppElement('body');

const CheckoutModal = ({ isModalOpen, closeModal }) => {
  const { cartItems, setCartItems, getTotalPrice } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSuccessMassageClose = () => {
    closeModal();
    setSuccessMessage(false);
    setCartItems([]);
  };

  return (
    isModalOpen && (
      <Modal
        className="bg-white w-full h-full lg:max-w-[900px]
         lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%]
          lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        isOpen={isModalOpen}
        style={modalStyles}
        onRequestClose={closeModal}
        contentLabel="Checkout Modal"
      >
        <ModalCloseButton
          onClick={successMessage ? handleSuccessMassageClose : closeModal}
        />

        {successMessage ? (
          <SuccessMessage closeModal={handleSuccessMassageClose} />
        ) : (
          <div className="lg:gap-x-8 h-full lg:px-12 lg:py-8">
            <h2
              className="mb-8 text-[20px] uppercase font-extrabold text-center lg:text-left
          pt-6 lg:pt-0"
            >
              Shipping & Checkout
            </h2>
            <div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
              <div
                className="flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8
            lg:p-0"
              >
                <div className="flex flex-col gap-4 h-full">
                  <InputPair placeholders={['First Name', 'Last Name']} />
                  <InputPair placeholders={['Phone', 'Email Address']} />
                  <InputPair placeholders={['Street Name', 'Street No.']} />
                  <InputPair placeholders={['Block', 'Floor', 'Apt. No.']} />
                  <div className="flex-1 h-full">
                    <textarea
                      className="textarea w-full h-full"
                      placeholder="Mentions (optional)"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex-1 h-full lg:max-w-[40%] flex flex-col 
          justify-between pt-3 px-8 lg:p-0"
              >
                <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                  <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
                    Your order
                  </h3>
                  <div
                    className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500
                font-semibold flex flex-col gap-y-4 h-[240px] py-2"
                  >
                    {cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-[15px]"
                      >
                        <div className="flex gap-x-2">
                          <div className="capitalize">{item.pizza.name}</div>
                          <div>x{item.quantity}</div>
                        </div>
                        <div>
                          ${' '}
                          {parseFloat(item.totalPrice * item.quantity).toFixed(
                            2
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex border-t pt-3 px-2 uppercase text-[15px] font-semibold justify-end">
                    Total:
                    <span className="ml-2">$ {getTotalPrice()}</span>
                  </div>
                </div>
                <button
                  className="btn btn-lg gradient w-full"
                  onClick={() => setSuccessMessage(true)}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    )
  );
};

const InputPair = ({ placeholders }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
      {placeholders.map((placeholder) => (
        <input
          key={placeholder}
          type="text"
          className="w-full input"
          placeholder={placeholder}
        />
      ))}
    </div>
  );
};

export default CheckoutModal;
