import React, { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import RegisterForm from "./components/RegisterForm";
import RecipeList from "./views/RecipeList";
import { Route } from "react-router-dom";
import PrivateRoute from "./utility/PrivateRoute";

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [message, setMessage] = useState();

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => (
          <RegisterForm
            {...props}
            setToken={setToken}
            message={message}
            setMessage={setMessage}
          />
        )}
      />
      <PrivateRoute
        path="/recipes"
        component={RecipeList}
        token={token}
        setToken={setToken}
      />
    </div>
  );
}

export default App;
