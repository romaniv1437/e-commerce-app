import {ICart, ICartProduct} from "../../models/ICart";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartState {
    cart: ICart[],
    isLoading: boolean,
    error: string,
}

const initialState: CartState = {
    cart: [{id: 1, userId: 1, cartProducts: [], totalPrice: 0}],
    isLoading: false,
    error: '',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCard(state, action: PayloadAction<ICartProduct>) {
            state.cart[0].cartProducts.push(action.payload);
            state.cart[0].totalPrice += action.payload.price * action.payload.count;
            console.log(state.cart[0].totalPrice)
        }
    },
})

export default cartSlice.reducer