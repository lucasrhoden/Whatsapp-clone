import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9000"
})

export default instance;

// process.env.baseURL ||
// 'http://localhost:9000'
// "https://rocky-taiga-88829.herokuapp.com"