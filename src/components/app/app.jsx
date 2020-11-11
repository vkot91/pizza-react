import React from "react";
import Header from "../header";
import { Cart, Home } from "../../pages";
//router
import { Route } from "react-router-dom";
//styles
import "../../scss/app.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </div>
  );
};

export default App;
