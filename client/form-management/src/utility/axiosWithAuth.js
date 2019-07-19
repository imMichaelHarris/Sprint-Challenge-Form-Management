import axios from 'axios'

export const axiosWithAuth = axios.create({
    baseURL: "http://localhost:5000/api/"
})