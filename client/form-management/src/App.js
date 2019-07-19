import React, { useState, useEffect } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import RegisterForm from "./components/RegisterForm";
import RecipeList from "./views/RecipeList";
import { Route } from "react-router-dom";

function App() {
  const [token, setToken] = useLocalStorage("token");

  return (
    <div className="App">
      <RegisterForm setToken={setToken} />
      <Route
        path="/recipes"
        render={props => <RecipeList {...props} token={token} />}
      />
    </div>
  );
}

export default App;
