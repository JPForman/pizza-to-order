import React from "react";

import Menu from "../dummys/DUMMY_MENU";
import MenuItem from "../components/MenuItem";
import "../scss/_home.scss";

const MenuPage = () => {

  return (
    <div className="home">
      <div className="menu">
        <h1>Menu</h1>
        {Menu.map((item) => 
            <MenuItem item={item} />
        )}
      </div>
    </div>
  );
};

export default MenuPage;
