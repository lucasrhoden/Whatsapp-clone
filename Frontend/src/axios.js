import axios from "axios";

const instance = axios.create({
    baseUrl = process.env.baseURL || "http://localhost:9000"
})

export default instance;