import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import './scss/_app.scss'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
