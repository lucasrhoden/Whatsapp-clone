import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9000' || process.env.baseURL || "https://rocky-taiga-88829.herokuapp.com"
})

export default instance;