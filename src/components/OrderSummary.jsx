import React from 'react'

import '../scss/_orderSummary.scss'

const OrderSummary = () => {
  return (
    <div className="orderSummary">
      <h3 className="title">Your Order</h3>
      <ul>
        <li>pizza</li>
        <li>salad</li>
        <li>drinks</li>
      </ul>
    </div>
  )
}

export default OrderSummary
