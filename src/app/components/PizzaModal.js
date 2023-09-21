import Modal from 'react-modal';
import { IoCloseOutline } from 'react-icons/io5';
import PizzaDetails from './PizzaDetails';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

Modal.setAppElement('body');

const PizzaModal = ({ pizza, isModalVisible, setIsModalVisible }) => {
  return (
    isModalVisible && (
      <Modal
        className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        isOpen={isModalVisible}
        style={modalStyles}
        onRequestClose={() => setIsModalVisible(false)}
        contentLabel="Pizza Modal"
      >
        <div
          className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          onClick={() => setIsModalVisible(false)}
        >
          <IoCloseOutline className="text-4xl text-orange" />
        </div>

        <PizzaDetails pizza={pizza} />
      </Modal>
    )
  );
};

export default PizzaModal;
