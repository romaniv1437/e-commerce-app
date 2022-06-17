import React, {useEffect} from 'react';
import s from './HomeProducts.module.css'
import Title from "../../assets/Title/Title";
import SubTitle from "../../assets/SubTitle/SubTitle";
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {getProductsForMainPage } from '../../../store/reducers/ActionCreators';
import ProductCard from "./ProductsCard/ProductCard";

type PrivateProps = {
    HomeProductsData: {title: string, subTitle: string}
}

const HomeProducts = ({HomeProductsData}:PrivateProps) => {


    const {products, isLoading, error} = useAppSelector(state => state.productReducer)
    return (
        <div className={s.home_products}>
            <div className={s.titles}>
                <Title>{HomeProductsData.title}</Title>
                <SubTitle>{HomeProductsData.subTitle}</SubTitle>
                {isLoading && <Title>Loading</Title>}
                {error && <Title>{error}</Title>}
            </div>
            <ProductCard products={products}/>
        </div>
    );
};

export default HomeProducts;
