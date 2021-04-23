import React from "react";

import Menu from "../dummys/DUMMY_MENU";
import MenuItem from "../components/MenuItem";
import OrderSummary from "../components/OrderSummary";
import "../scss/_menuPage.scss";

const MenuPage = () => {
  return (
    <div className="home">
      <div className="menu">
        <h1>Menu</h1>
        <div className="content">
        <div>
          {Menu.map((item) => (
            <MenuItem item={item} />
          ))}
        </div>
        <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
