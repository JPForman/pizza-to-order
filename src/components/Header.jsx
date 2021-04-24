import React from "react";
import { Link } from 'react-router-dom'
import "../scss/_header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="title-container">
      <img
          src="https://images.unsplash.com/photo-1595060094020-734d7fb273ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="Pizza Pic"
          className="header-pic-1"
        />
        <div className="title-column">
          <h1>Pauly's Pizza</h1>
          <h2>True Detroit Style Pizza</h2>
        </div>
        <img
          src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          alt="Pizza Pic"
          className="header-pic-2"
        />
      </div>
      <div className="link-list">
        <Link className="link"><p>Menu/Place Order</p></Link>
        <Link className="link"><p>About</p></Link>
        <Link className="link"><p>Contact</p></Link>
        <Link className="link"><p>Store App</p></Link>
      </div>
    </div>
  );
};

export default Header;
