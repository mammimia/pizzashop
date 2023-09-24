import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const ModalCloseButton = ({ onClick }) => {
  return (
    <div
      className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
      onClick={onClick}
    >
      <IoCloseOutline className="text-4xl text-orange" />
    </div>
  );
};

export default ModalCloseButton;
