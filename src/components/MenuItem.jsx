import React from "react";

const MenuItem = ({ item }) => {
  const {title, description, cost} = item

  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3>{cost}</h3>
    </div>
  );
};

export default MenuItem;
