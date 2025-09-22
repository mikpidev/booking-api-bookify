import axios from "axios"

const API_URL = 'https://apibookingsaccomodations-production.up.railway.app/api/V1'

const TOKEN = "7Mjp3SrlfwR2v4JEliWMKxeHJyulJQ1abllTsWJX4952566b";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${TOKEN}`, 
    },
});

//agregar bearer Token 
//api.interceptors.request.use(config=> {

//    const token = localStorage.getItem("token");
//    if(token) config.headers.Authorization = `Bearer ${token}`;

//    return config;
//});

//Login
//export const loginUser = (credentials) => api.post("/login", credentials);

export default api;
