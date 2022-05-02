const baseURL = 'http://localhost:3000/api';
import axios from 'axios'

const API = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json"

    }
})

export default API;