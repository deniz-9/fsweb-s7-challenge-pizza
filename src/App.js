import React from "react";
import FirstPage from "./components/FirstPage";
import MainPage from "./components/MainPage";
import Order from "./components/Order";
import Success from "./components/Success";

import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <FirstPage />
          </Route>
        
        <Route exact path="/mainpage">
          <MainPage />
        </Route>
        <Route exact path="/order-pizza">
          <Order />
        </Route>
        
        <Route exact path="/success">
          <Success />
        </Route>
          </Switch>
    </BrowserRouter>
  );
};
export default App;