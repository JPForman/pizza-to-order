import React, { useState } from "react";

import "../scss/_workflowCard.scss";

const WorkflowCard = ({ za, orderList, setOrderList }) => {
  const { pizza, toppings, pizzaId } = za;

  const advanceHandler = (direction) => {
    const pizzaIndex = orderList.findIndex((pizza) => pizza.pizzaId === pizzaId)

    let newOrderList = [...orderList]
    direction === 'adv' ? newOrderList[pizzaIndex].status += 1 : newOrderList[pizzaIndex].status -= 1

    setOrderList(newOrderList) 
  };

  return (
    <div className="workflow-card">
      <h2 className="pizza">{pizza}</h2>
      {toppings.map((topping) => (
        <p className="topping">{topping}</p>
      ))}

      <button
        className="advance"
        onClick={() => {
          advanceHandler('adv');
        }}
      >
        +
      </button>
      <button
        className="back"
        onClick={() => {
          advanceHandler('back');
        }}
      >
        -
      </button>
    </div>
  );
};

export default WorkflowCard;
