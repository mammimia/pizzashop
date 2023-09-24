import React from 'react';
import Modal from 'react-modal';
import ModalCloseButton from '../modal/ModalCloseButton';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

Modal.setAppElement('body');

const CheckoutModal = ({ isModalOpen, closeModal }) => {
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
        <ModalCloseButton onClick={closeModal} />
      </Modal>
    )
  );
};

export default CheckoutModal;
