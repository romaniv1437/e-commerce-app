import {ICart, ICartProduct} from "../../models/ICart";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartState {
    cart: ICart[],
    isLoading: boolean,
    error: string,
}

const initialState: CartState = {
    cart: [],
    isLoading: true,
    error: '',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<ICart>) {
            state.isLoading = true
            state.cart[0] = action.payload
            state.isLoading = false
            console.log(state.cart[0])
        },
        // в корзині знаходиться ICartProduct а не IProduct, це зроблено для того, щоб добавити count i total price
        // які не властиві моделі IProduct
        addProductToCard(state, action: PayloadAction<ICartProduct>) {
            // перевіряємо чи масив cartProducts не пустий, якщо так, то зануляємо тотал прайс(для безпеки)
            // та пушимо продукт в масив
            state.cart[0].cartProducts.push(action.payload);
            state.cart[0].totalPrice += action.payload.price * action.payload.count;
        },
        onChangeQTY(state, action: PayloadAction<{count: number, id: number }>) {
            // змінюємо кількість продукта(ICartProduct) в корзині
            // якщо айді співпав, то count буде дорівнювати тому, що прийшов в action
            state.cart[0].cartProducts.map(product => {
                if (product.id === action.payload.id) {
                    product.count = action.payload.count
                    product.totalPrice = product.price*product.count
                    cartSlice.caseReducers.calculateCart(state);
                }
                return product
            })
        },
        onRemoveProduct(state, action: PayloadAction<number>) {
            // за допомогою filter очищаємо масив від продукта, чий айді співпав з action
            state.cart[0].cartProducts = state.cart[0].cartProducts.filter(p => p.id !== action.payload)
            cartSlice.caseReducers.calculateCart(state);
        },
        calculateCart(state) {
            // функція що приймає лише стейт, і використовується для перерахування загальної суми в корзині
            // за допомогою цієї функції, в корзині завжди актуальна загальна ціна
            let totalPrice = 0
            if (state.cart[0].cartProducts.length !== 0) {
                state.cart[0].cartProducts.map(product => {
                    product.totalPrice = product.price*product.count
                    totalPrice += product.totalPrice
                    return product
                })
            }
            state.cart[0].totalPrice = totalPrice
        }
    },
})

export default cartSlice.reducer