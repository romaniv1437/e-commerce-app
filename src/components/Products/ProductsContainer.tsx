import React from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {ProductData} from "../../data/ProductData";
import {cartSlice} from '../../store/reducers/CartSlice';
import Products from './Products';
import withCartLoading from '../assets/HOC/withCartLoading';

const ProductsContainer = () => {
    const params = useParams();
    const {products} = useAppSelector(state => state.productReducer)
    const {cart} = useAppSelector(state => state.cartReducer)
    const currentProduct = products.filter(product => product.title === params.productName)
    const dispatch = useAppDispatch();
    const {addProductToCard} = cartSlice.actions
    const addProducts = (id: number, productId:number, productTitle:string, productImage:string, price: number, count:number) => {
        dispatch(addProductToCard({id: id, productId: productId,  productTitle: productTitle,
            productImage: productImage, price: price, count: count, totalPrice: price*count}))
    }

    return <Products currentProduct={currentProduct[0]}
                     addProducts={addProducts}
                     ProductData={ProductData}
                     cartProducts={cart[0].cartProducts}/>
};

export default withCartLoading(ProductsContainer);