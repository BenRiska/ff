import React, {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";
import Gallery from "./Gallery";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {firebaseApp} from "./firebase";
import {useStateValue} from "./StateProvider"
import { actionTypes } from "./reducer";

function App() {

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const authListener = () => {
      firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch({
            type: actionTypes.SET_USER,
            user: user,
          });
        } 
      });
    };
    authListener();
  }, [dispatch]);

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
