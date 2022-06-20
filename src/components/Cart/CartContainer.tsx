import React from 'react';
import Cart from './Cart';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {cartData} from "../../data/CartData";
import {cartSlice} from "../../store/reducers/CartSlice";
import withCartLoading from "../assets/HOC/withCartLoading";

const CartContainer = () => {
    // получаємо корзину через useAppSelector
    const {cart} = useAppSelector(state => state.cartReducer)
    // получаємо функції onChangeQTY, onRemoveProduct з cartSlice.actions
    const {onChangeQTY,onRemoveProduct } = cartSlice.actions
    // присвоюємо змінній cartProducts продукти з корзини
    // присвоюємо змінній totalPrice загальну ціну з корзини
    // використовуємо кастомний useAppDispatch для того щоб диспатчити функції з cartSlice.actions
    const dispatch = useAppDispatch();
    const changeQTY = (id: number, count:number) => {
        dispatch(onChangeQTY({id: id, count: count}))
    }
    const removeProduct = (id: number) => {
        dispatch(onRemoveProduct(id))
    }

    const cartProducts = cart[0].cartProducts
    const totalPrice = cart[0].totalPrice
    return <Cart cartProducts={cartProducts} cartData={cartData} changeQTY={changeQTY} removeProduct={removeProduct} totalPrice={totalPrice}/>
};

export default withCartLoading(CartContainer);
