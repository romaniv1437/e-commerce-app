import {IPopularProduct, IProduct} from "../../models/IProduct";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getPopularProductsForMainPage, getProductsForMainPage} from "./ActionCreators";


interface ProductState {
    products: IProduct[],
    popularProducts: IPopularProduct[]
    isLoading: boolean,
    error: string,
    currentPage: number,
    limit: number
}

const initialState: ProductState = {
    products: [],
    popularProducts: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    limit: 8
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCurrentPageNext(state, action: PayloadAction<number>) {
            state.currentPage += action.payload
        },
        setCurrentPagePrev(state, action: PayloadAction<number>) {
            state.currentPage -= action.payload
        }
    },
    extraReducers: {
        // getProductsForMainPage, getPopularProductsForMainPage асинхронна функція що робить ajax запит за допомогою axios
        // функція вертає проміс, за станом промісу ми виконуємо різні функції в редюсері
        [getProductsForMainPage.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload
        },
        [getProductsForMainPage.pending.type]: (state) => {
            state.isLoading = true
        },
        [getProductsForMainPage.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [getPopularProductsForMainPage.fulfilled.type]: (state, action: PayloadAction<IPopularProduct[]>) => {
            state.isLoading = false;
            state.error = '';
            state.popularProducts = action.payload
        },
        [getPopularProductsForMainPage.pending.type]: (state) => {
            state.isLoading = true
        },
        [getPopularProductsForMainPage.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default productSlice.reducer