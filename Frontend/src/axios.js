import axios from "axios";

const instance = axios.create({
    baseURL: "https://rocky-taiga-88829.herokuapp.com"
})

export default instance;

// process.env.baseURL ||
// 'http://localhost:9000'
// "https://rocky-taiga-88829.herokuapp.com"