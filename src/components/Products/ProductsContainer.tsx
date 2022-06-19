import React from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {ProductData} from "../../data/ProductData";
import {cartSlice} from '../../store/reducers/CartSlice';
import Products from './Products';

const ProductsContainer = () => {
    // викортистовуємо useParams щоб отримати productName з посилання
    const params = useParams();
    // отримуємо products, popularProducts через useAppSelector з productReducer
    const {products, popularProducts} = useAppSelector(state => state.productReducer)
    // отримуємо cart з cartReducer
    const {cart} = useAppSelector(state => state.cartReducer)
    // поєднюємо два масива методом concat, записуємо їх у змінну allProducts
    const allProducts = products.concat(popularProducts)
    // отримуємо вибраний продукт через фільтр, де порівнюємо title з product, і productName з params
    const currentProduct = allProducts.filter(product => product.title === params.productName)
    // отримуємо useAppDispatch під іменем dispatch
    const dispatch = useAppDispatch();
    // отримуємо addProductToCard з cartSlice.actions
    const {addProductToCard} = cartSlice.actions
    // робимо колбек функцію, що приймає в себе параметри, і з ними діспатчить addProductToCard
    const addProducts = (id: number, productId:number, productTitle:string, productImage:string, price: number, count:number) => {
        dispatch(addProductToCard({id: id, productId: productId,  productTitle: productTitle,
            productImage: productImage, price: price, count: count, totalPrice: price*count}))
    }
    return <Products currentProduct={currentProduct[0]}
                     addProducts={addProducts}
                     ProductData={ProductData}
                     cartProducts={cart[0].cartProducts}/>
};

export default ProductsContainer;