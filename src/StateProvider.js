// import context api
import React, { createContext, useContext, useReducer } from "react";

// init context
export const StateContext = createContext();

// create app wrapper
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// function to access state
export const useStateValue = () => useContext(StateContext);
