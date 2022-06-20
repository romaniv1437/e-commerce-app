import axios from "axios";

const instance = axios.create({
    baseURL: 'localhost:3000/src/axios/mock-data/'
})

export default instance