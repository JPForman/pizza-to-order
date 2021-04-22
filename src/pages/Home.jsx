import React from "react";

import Menu from "../dummys/DUMMY_MENU";
import MenuItem from "../components/MenuItem";
import "../scss/_home.scss";

const Home = () => {

  return (
    <div className="home">
      <div className="menu">
        <h1>Menu</h1>
        {Menu.map((item) => 
          <div>
            <MenuItem item={item} />
            <p>hi</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
