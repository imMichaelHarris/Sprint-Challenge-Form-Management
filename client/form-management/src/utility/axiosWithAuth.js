import axios from 'axios'

// export const axiosWithAuth = axios.create({
//     baseURL: "http://localhost:5000/api/",
    
//         headers: {
//             "Authorization" : localStorage.getItem("token")
//     }

// })
export const axiosWithAuth =() => {
    const token = JSON.parse(localStorage.getItem('token'));
 
    return axios.create({
        headers: { authorization: token,
            'Content-Type': 'application/json'
        },
        baseURL: "http://localhost:5000/api"
    });
 };