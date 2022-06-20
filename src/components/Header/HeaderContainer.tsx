import React from 'react';
import Header from './Header';
import useWindowDimensions from "../assets/Custom-Hooks/useWindowDimensions/useWindowDimensions";
import {useAppSelector} from "../../hooks/redux";
import withCartLoading from "../assets/HOC/withCartLoading";

const HeaderContainer = () => {
    const { width } = useWindowDimensions();
    const {cart} = useAppSelector(state => state.cartReducer)
    const count = cart[0].cartProducts.length
    return <Header width={width} count={count}/>
};

export default withCartLoading(HeaderContainer);
