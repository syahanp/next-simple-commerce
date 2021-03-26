import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:1337" : process.env.NEXT_PUBLIC_BASE_URL
});

export default api