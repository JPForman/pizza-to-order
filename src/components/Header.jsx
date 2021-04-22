import React from "react";
import "../scss/_header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="title-container">
        <div className="title-column">
          <h1>Pauly's Pizza</h1>
          <h2>True Detroit Style Pizza</h2>
        </div>
        <img
          src="https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Pizza Pic"
          className="header-pizza"
        />
      </div>
    </div>
  );
};

export default Header;
