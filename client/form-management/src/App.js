import React, { useEffect } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import RegisterForm from "./components/RegisterForm";
import RecipeList from "./views/RecipeList";

function App() {
  const [token, setToken] = useLocalStorage("token");

  return (
    <div className="App">
      <RegisterForm setToken={setToken} />
      <RecipeList />
    </div>
  );
}

export default App;
