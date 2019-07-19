import React from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [token, setToken] = useLocalStorage();

  return (
    <div className="App">
      <RegisterForm setToken={setToken} />
    </div>
  );
}

export default App;
