import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Menu from "../dummys/DUMMY_MENU";
import MenuItem from "../components/MenuItem";
import OrderSummary from "../components/OrderSummary";
import AboutPage from "../pages/AboutPage";
import "../scss/_menuPage.scss";

const MenuPage = () => {
  let { path, url } = useRouteMatch();

  const [order, setOrder] = useState([]);
  const [orderList, setOrderList] = useState([]);

  return (
    <div className="home">
      <div className="menu">
        <h1>Menu</h1>
        <div className="links"></div>
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
