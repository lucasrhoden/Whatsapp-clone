import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:${process.env.PORT || "9000"}`
})

export default instance;