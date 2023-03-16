import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home.js";
import Client from "./components/Client.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import ListStores from "./components/ListStores.js";
import FormAddStore from "./components/FormAddStore.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/client" component={Client} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/formAddStore" component={FormAddStore} />
          <Route path="/confirmation" component={ListStores} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
