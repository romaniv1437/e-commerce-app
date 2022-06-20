import axios from "../axios";
// сюда ми імпортували інстанс аксіоса, він експортований по дефолту, тому можна імпортувати під любим іменем
// тепер в axios у нас є настроєний baseURL, і його не треба прописувати кожного разу
export const productAPI = {
    getProductsForMainPage: () => {
        return axios.get(`products`)
    },
    getPopularProductsForMainPage: () => {
        return axios.get('products')
    },
}