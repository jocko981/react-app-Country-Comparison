import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header/Header";
import LoginPage from "./LoginPage/LoginPage";
import Dashboard from "./Dashboard/Dashboard";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
          <Route path="/" component={Header} />
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/" exact component={LoginPage} />
        </Switch>                       
      </BrowserRouter>
    </div>
  );
}

export default App;
