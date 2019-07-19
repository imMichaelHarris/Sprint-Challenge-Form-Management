import React, { useState, useEffect } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import RegisterForm from "./components/RegisterForm";
import RecipeList from "./views/RecipeList";
import { axiosWithAuth } from "./utility/axiosWithAuth";
import { Route } from "react-router-dom";

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    axiosWithAuth.get("/restricted/data", {
      headers: {
        Authorization: token
      }
    });
  }, []);
  return (
    <div className="App">
      <RegisterForm setToken={setToken} />
      <Route path="/recipes" render={props => <RecipeList {...props} />} />
    </div>
  );
}

export default App;
