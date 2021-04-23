import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput } from 'reactstrap';

const ToppingsModal = ({
  toppingsModal,
  setToppingsModal,
  toggleToppingsModal,
  item
}) => {

  const {title, description, cost} = item
  return (
    <div>
      <Modal isOpen={toppingsModal} toggle={toggleToppingsModal} >
        <ModalHeader toggle={toggleToppingsModal}>{title}</ModalHeader>
        <ModalBody>
          <h3>Anything you would like to add?</h3>
          <div>
          <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
          <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
          <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one"  />
          <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Can't click this label to check!"  />
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleToppingsModal}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggleToppingsModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ToppingsModal;
