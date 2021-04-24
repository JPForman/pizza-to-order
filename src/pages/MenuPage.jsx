import React, { useState } from "react";

import Menu from "../dummys/DUMMY_MENU";
import MenuItem from "../components/MenuItem";
import OrderSummary from "../components/OrderSummary";
import "../scss/_menuPage.scss";

const MenuPage = ({ orderList, setOrderList }) => {

  const [order, setOrder] = useState([]);
 

  return (
    <div className="home">
      <div className="menu">
        <h1>Menu</h1>
        <div className="content">
          <div>
            {Menu.map((item) => (
              <MenuItem item={item} order={order} setOrder={setOrder} />
            ))}
          </div>
          <OrderSummary
            order={order}
            setOrder={setOrder}
            orderList={orderList}
            setOrderList={setOrderList}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
