import React from 'react'

const MenuItem = ({ item }) => {

  console.log('item', item);
  return (
    <div>
      <h3>{item.title}</h3>
      <h3>{item.description}</h3>
      <h3>{item.cost}</h3>
    </div>
  )
}

export default MenuItem
