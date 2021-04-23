import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput } from 'reactstrap';

const ToppingsModal = ({
  toppingsModal,
  setToppingsModal,
  toggleToppingsModal,
  item
}) => {

  const [toppings, setToppings] = useState([])

  const checkboxHandler = (topping) => {
    setToppings([...toppings, topping])
    console.log("toppings", toppings);
  } 

  const {title, description, cost} = item
  return (
    <div>
      <Modal isOpen={toppingsModal} toggle={toggleToppingsModal} >
        <ModalHeader toggle={toggleToppingsModal}>{title}</ModalHeader>
        <ModalBody>
          <h3>Anything you would like to add?</h3>
          <div>
          <CustomInput type="checkbox" id="Checkbox1" label="Green Chile" onChange={()=>checkboxHandler("Green Chile")}/>
          <CustomInput type="checkbox" id="Checkbox2" label="Mushrooms" onChange={()=>checkboxHandler("Mushrooms")}/>
          <CustomInput type="checkbox" id="Checkbox3" label="Onions" onChange={()=>checkboxHandler("Onions")}/>
          <CustomInput type="checkbox" id="Checkbox4" label="Spinach" onChange={()=>checkboxHandler("Spinach")}/>
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
