import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mockend.com/romaniv1437/e-commerce-app/'
})

export default instance