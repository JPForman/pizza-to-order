import React from "react";

import "../scss/_menuItem.scss"

const MenuItem = ({ item }) => {
  const {title, description, cost} = item

  const addToOrderHandler = (cost) => [
    console.log("cost", cost)
  ]

  return (
    <div className="menuItem">
      <h3>{title} ${cost}</h3>
      <p>{description}</p>
      <p className="add-to-order" onClick={()=>{addToOrderHandler({cost})}}>add to order!</p>
    </div>
  );
};

export default MenuItem;
