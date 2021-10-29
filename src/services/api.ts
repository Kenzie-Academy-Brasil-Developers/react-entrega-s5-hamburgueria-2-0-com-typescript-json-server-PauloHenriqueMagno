import axios from "axios";

const api = axios.create({
    baseURL: "https://hamburgueria-2-api.herokuapp.com"
});

export default api;