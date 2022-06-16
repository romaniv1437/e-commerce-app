import instance from "../axios";

export const productAPI = {
    getProductsForMainPage: (limit = 10, page = 1) => {
        return instance.get(`products?limit=${limit}&page=${page}`)
    },
    getPopularProductsForMainPage: (limit = 4, page = 1) => {
        return instance.get(`products?limit=${limit}&page=${page}`)
    },
}