import React from 'react';
import './App.css';
import useLocalStorage from "./hooks/useLocalStorage";
import RegisterForm from './components/RegisterForm';

function App() {
  const [token, setToken] = useLocalStorage();

  return (
    <div className="App">
      <RegisterForm />
    </div>
  );
}

export default App;
