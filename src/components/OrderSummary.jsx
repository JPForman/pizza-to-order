import React, { useState } from "react";

import "../scss/_orderSummary.scss";

const OrderSummary = ({ order, setOrder, orderList, setOrderList }) => {
  const grandSum = (order) => {
    let total = 0;
    order.forEach((item) => {
      total += item.totalItemCost;
    });
    return total;
  };

  

  const placeOrderHandler = (order) => {
    setOrderList([...orderList, order])
    setOrder([])
    console.log('orderList', orderList);
  }

  return (
    <div className="orderSummary">
      <h3 className="title">Your Order</h3>
      <hr />
      {order.map((item) => (
        <div>
          <p className="pizza">
            {item.pizza}
            <span className="cost">${item.cost}</span>
          </p>
          {item.toppings.map((topping) => (
            <p className="topping">
              {topping}
              <span className="cost">$1</span>
            </p>
          ))}
          <hr />
        </div>
      ))}
      <div className="total-container">
        <h3>Total</h3>
        <h5 >${grandSum(order)}</h5>
      </div>
      <p className="place-order" onClick={()=>(placeOrderHandler(order))}>Place Order</p>
    </div>
  );
};

export default OrderSummary;
