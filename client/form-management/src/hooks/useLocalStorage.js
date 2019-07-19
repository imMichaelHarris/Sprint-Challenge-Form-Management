import {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    const [localToken, setLocalToken] = useState();

    const token = localStorage.getItem(key);
    token ? setLocalToken(token) : setLocalToken(initialValue)

    return [localToken, setLocalToken]
}

export default useLocalStorage;