import React from "react";
import FirstPage from "./components/FirstPage";
import MainPage from "./components/MainPage";

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
          </Switch>
    </BrowserRouter>
  );
};
export default App;