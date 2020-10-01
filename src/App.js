import React from "react";
import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";
import Gallery from "./Gallery";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/store">
            <Shop />
          </Route>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
