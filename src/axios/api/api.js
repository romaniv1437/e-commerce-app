import axios from "../axios";
// сюда ми імпортували інстанс аксіоса, він експортований по дефолту, тому можна імпортувати під любим іменем
// тепер в axios у нас є настроєний baseURL, і його не треба прописувати кожного разу
export const productAPI = {
    getProductsForMainPage: (limit = 10, page = 1) => {
        return axios.get(`products?limit=${limit}&page=${page}`)
    },
    getPopularProductsForMainPage: (limit = 4, page = 1) => {
        return axios.get(`products?limit=${limit}&page=${page}`)
    },
}