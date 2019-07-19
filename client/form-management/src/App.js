import React, { useState, useEffect } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import RegisterForm from "./components/RegisterForm";
import RecipeList from "./views/RecipeList";
import { Route } from "react-router-dom";
import PrivateRoute from "./utility/PrivateRoute";

function App() {
  const [token, setToken] = useLocalStorage("token");

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => <RegisterForm {...props} setToken={setToken} />}
      />
      <Route
        path="/recipes"
        render={props => <RecipeList {...props} token={token} />}
      />
    </div>
  );
}

export default App;
