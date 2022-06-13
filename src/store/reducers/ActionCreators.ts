import {createAsyncThunk} from "@reduxjs/toolkit";
import {productAPI} from "../../axios/api/api";


export const getProductsForMainPage = createAsyncThunk(
    'product/getAll',
    async (data: any, thunkAPI) => {
        try {
            const response = await productAPI.getProductsForMainPage(data.limit, data.page)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Products не загрузились')
        }
    }
)