import React from 'react';
import s from './HomeProducts.module.css'
import Title from "../../assets/UI-Components/Title/Title";
import SubTitle from "../../assets/UI-Components/SubTitle/SubTitle";
import {useAppSelector} from '../../../hooks/redux';
import ProductCard from "./ProductsCard/ProductCard";

type PrivateProps = {
    HomeProductsData: {title: string, subTitle: string}
}

const HomeProducts = ({HomeProductsData}:PrivateProps) => {


    const {products, isLoading, error} = useAppSelector(state => state.productReducer)
    const productsForHomePage = products.slice(0, 8)
    return (
        <div className={s.home_products}>
            <div className={s.titles}>
                <Title>{HomeProductsData.title}</Title>
                <SubTitle>{HomeProductsData.subTitle}</SubTitle>
                {isLoading && <Title>Loading</Title>}
                {error && <Title>{error}</Title>}
            </div>
            <ProductCard products={productsForHomePage}/>
        </div>
    );
};

export default HomeProducts;
