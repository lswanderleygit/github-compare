import React from "react";

/**
 * BrowserRouter - diz para nossa app que as nossas rotas estão no browser, para ele saber como controlar as urls
 * Switch - Evitar duas rotas serem chamadas ao mesmo tempo
 */
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/main/index";

import Footer from "../components/Footer";

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </>
  </BrowserRouter>
);

export default Routes;
