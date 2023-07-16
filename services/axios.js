import axios from "axios";


const Axios = axios.create({
    baseURL: 'http://192.168.1.71:8000/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default Axios;