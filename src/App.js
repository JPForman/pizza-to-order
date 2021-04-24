import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import StoreApp from "./pages/StoreApp";
import Header from "./components/Header";
import './scss/_app.scss'

const App = () => {

  const [orderList, setOrderList] = useState([]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <MenuPage orderList={orderList} setOrderList={setOrderList} />
          </Route>
          <Route path='/about' exact>
            <AboutPage  />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/storeapp" exact>
            <StoreApp orderList={orderList} setOrderList={setOrderList} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
