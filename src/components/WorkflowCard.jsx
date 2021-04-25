import React from 'react'

import '../scss/_workflowCard.scss'

const WorkflowCard = ({ za }) => {
  
  const { pizza, toppings, id } = za

  return (
    <div className="workflow-card">
      <h2 className="pizza">{pizza}</h2>
      {toppings.map((topping)=><p className="topping">{topping}</p>)}
      
      <button className="advance">+</button>
      <button className="back">-</button>
    </div>
  )
}

export default WorkflowCard
