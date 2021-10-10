import React, { useState } from  'react';
import { Typography, Button, Modal } from 'antd';


const NewAccountModal: React.FC<{
  toggleModal: () => void,
}> = ({ toggleModal }) => {
  return (
    <>
      <Button key="back" onClick={toggleModal}>
        Return
      </Button>,
      <Button key="submit" type="primary" loading={false} onClick={toggleModal}>
        Submit
      </Button>,
      <Button
        key="link"
        href="https://google.com"
        type="primary"
        loading={false}
        onClick={toggleModal}
      >
        Search on Google
      </Button>,

      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </>
  )
};

export default NewAccountModal;