import React from 'react';
import s from './HomePopularProducts.module.css'
import {useAppSelector} from "../../../hooks/redux";
import Title from "../../assets/Title/Title";
import SubTitle from "../../assets/SubTitle/SubTitle";
import ProductCard from "../HomeProducts/ProductsCard/ProductCard";

type PrivateProps = {
    HomePopularProductsData: {
        title: string,
        subTitle: string
    }
}


const HomePopularProducts = ({HomePopularProductsData}:PrivateProps) => {
    const {popularProducts, isLoading, error} = useAppSelector(state => state.productReducer)

    return (
        <div className={s.popularProducts}>
            <div className={s.titles}>
                <Title>{HomePopularProductsData.title}</Title>
                <SubTitle>{HomePopularProductsData.subTitle}</SubTitle>
                {isLoading && <Title>Loading</Title>}
                {error && <Title>{error}</Title>}
            </div>
            <ProductCard products={popularProducts} />
        </div>
    );
};

export default HomePopularProducts;
