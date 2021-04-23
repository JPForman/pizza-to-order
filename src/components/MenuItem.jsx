import React, { useState } from "react";

import ToppingsModal from "./ToppingsModal";
import "../scss/_menuItem.scss";

const MenuItem = ({ item, order, setOrder }) => {
  const { title, description, cost } = item;

  const addToOrderHandler = (cost) => {
    console.log("cost", cost);
  };

  const [toppingsModal, setToppingsModal] = useState(false);

  const toggleToppingsModal = () => setToppingsModal(!toppingsModal);

  return (
    <div className="menuItem">
      <h3>
        {title} ${cost}
      </h3>
      <p>{description}</p>
      <p
        className="add-to-order"
        onClick={() => {
          addToOrderHandler({ cost });
          toggleToppingsModal();
        }}
      >
        add to order!
      </p>
      <ToppingsModal
        toppingsModal={toppingsModal}
        setToppingsModal={setToppingsModal}
        toggleToppingsModal={toggleToppingsModal}
        item={item}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
};

export default MenuItem;
