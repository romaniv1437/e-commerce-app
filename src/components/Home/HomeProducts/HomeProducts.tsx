import React, {useEffect} from 'react';
import s from './HomeProducts.module.css'
import Title from "../../assets/Title/Title";
import SubTitle from "../../assets/SubTitle/SubTitle";
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {getProductsForMainPage } from '../../../store/reducers/ActionCreators';
import { productSlice } from '../../../store/reducers/ProductsSlice';
import ProductCard from "./ProductsCard/ProductCard";

const HomeProducts = (props:any) => {

    const dispatch = useAppDispatch();
    const {products, isLoading, error, limit, currentPage} = useAppSelector(state => state.productReducer)
    const {setCurrentPageNext, setCurrentPagePrev} = productSlice.actions
    useEffect(() => {
        dispatch(getProductsForMainPage({limit, currentPage}))
    }, [dispatch, limit, currentPage])

    return (
        <div className={s.home_products}>
            <div className={s.titles}>
                <Title>{props.HomeProductsData.title}</Title>
                <SubTitle>{props.HomeProductsData.subTitle}</SubTitle>
                {isLoading && <Title>Loading</Title>}
                {error && <Title>{error}</Title>}
            </div>
            <ProductCard products={products}/>
        </div>
    );
};

export default HomeProducts;
