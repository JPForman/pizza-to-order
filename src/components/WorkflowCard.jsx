import React, { useState } from "react";

import "../scss/_workflowCard.scss";

const WorkflowCard = ({ za, orderList, setOrderList }) => {
  const { pizza, toppings, pizzaId } = za;

  const [phase, setPhase] = useState(1);

  const advanceHandler = () => {
    // const orderIndex = orderList.findIndex((t)=> t.orderId === )
    setPhase(phase + 1);
    const pizzaIndex = orderList.findIndex((pizza) => pizza.pizzaId === pizzaId)

    let newOrderList = [...orderList]

    newOrderList[pizzaIndex].status += 1
    setOrderList(newOrderList) 

    console.log("orderList=", orderList);
    console.log("pizzaId=", pizzaId);
    console.log("phase=", phase);
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
          advanceHandler(pizzaId);
        }}
      >
        +
      </button>
      <button
        className="back"
        onClick={() => {
          advanceHandler(pizzaId);
        }}
      >
        -
      </button>
    </div>
  );
};

export default WorkflowCard;
