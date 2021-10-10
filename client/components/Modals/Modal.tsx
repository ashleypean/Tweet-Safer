import React from 'react';
import { Modal as AntModal } from 'antd';
import NewAccountModal from './NewAccountModal';

const Modal: React.FC<{
  modalType: string, 
  isOpen: boolean,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({ modalType, isOpen, setModalOpen }) => {

  const toggleModal = () => setModalOpen(prev => !prev)

  return isOpen ? (
    <AntModal
      title={modalType}
      visible={isOpen}
      onCancel={() => {}}
      footer={null}
    >
      {modalType === 'NewAccount' && <NewAccountModal toggleModal={toggleModal} />}
    </AntModal>
  ): null;
}

export default Modal;