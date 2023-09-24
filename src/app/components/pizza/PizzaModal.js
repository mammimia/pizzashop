import Modal from 'react-modal';
import { IoCloseOutline } from 'react-icons/io5';
import PizzaDetails from './PizzaDetails';
import ModalCloseButton from '../modal/ModalCloseButton';

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
        <ModalCloseButton onClick={() => setIsModalVisible(false)} />

        <PizzaDetails
          pizza={pizza}
          closeModal={() => setIsModalVisible(false)}
        />
      </Modal>
    )
  );
};

export default PizzaModal;
