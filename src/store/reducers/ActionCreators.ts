import {createAsyncThunk} from "@reduxjs/toolkit";
import {productAPI} from "../../axios/api/api";


import prod from '../../axios/mock-data/products.json'
console.log(prod);


// санка яка отримує продукти для головної сторінки
export const getProductsForMainPage = createAsyncThunk(
    'product/getAll',
    async (_, thunkAPI) => {
        try {
            // productAPI ксатомний axios
            const response = await productAPI.getPopularProductsForMainPage()
            console.log(response);

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Products не загрузились')
        }
    }
)
// санка що отримує популярні продукти
export const getPopularProductsForMainPage = createAsyncThunk(
    'popularProduct/getAll',
    async (data: any, thunkAPI) => {
        try {
            const response = await productAPI.getPopularProductsForMainPage()
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Products не загрузились')
        }
    }
)