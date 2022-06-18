import React from 'react';
import Cart from './Cart';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {cartData} from "../../data/CartData";
import {cartSlice} from "../../store/reducers/CartSlice";

const CartContainer = () => {
    const {cart} = useAppSelector(state => state.cartReducer)
    const {onChangeQTY,onRemoveProduct } = cartSlice.actions

    const cartProducts = cart[0].cartProducts
    const totalPrice = cart[0].totalPrice

    const dispatch = useAppDispatch();
    const changeQTY = (id: number, count:number) => {
        dispatch(onChangeQTY({id: id, count: count}))
    }
    const removeProduct = (id: number) => {
        dispatch(onRemoveProduct(id))
    }

    return <Cart cartProducts={cartProducts} cartData={cartData} changeQTY={changeQTY} removeProduct={removeProduct} totalPrice={totalPrice}/>
};

export default CartContainer;
