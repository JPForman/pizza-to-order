import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const FlashAlert = ({ flashAlert,  toggleFlash }) => {




  return (
    <div>
      <Modal isOpen={flashAlert} toggle={toggleFlash}>
        <ModalHeader toggle={toggleFlash}>Congratulations</ModalHeader>
        <ModalBody>
          Your delicious pizza has been ordered!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleFlash}>Okay!</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FlashAlert
