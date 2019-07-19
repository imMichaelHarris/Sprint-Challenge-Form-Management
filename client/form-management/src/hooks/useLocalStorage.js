import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [localToken, setLocalToken] = useState(() => {
    const token = localStorage.getItem(key);

    return token ? JSON.parse(key) : initialValue;
  });

  const setLocalStorage = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalToken(value);
  };

  return [localToken, setLocalStorage];
};

export default useLocalStorage;
