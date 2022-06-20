import React from 'react';
import s from './HomePopularProducts.module.css'
import {useAppSelector} from "../../../hooks/redux";
import Title from "../../assets/UI-Components/Title/Title";
import SubTitle from "../../assets/UI-Components/SubTitle/SubTitle";
import ProductCard from "../HomeProducts/ProductsCard/ProductCard";

type PrivateProps = {
    HomePopularProductsData: {
        title: string,
        subTitle: string
    }
}


const HomePopularProducts = ({HomePopularProductsData}:PrivateProps) => {
    const {products, isLoading, error} = useAppSelector(state => state.productReducer)
    const productsForPopularPage = products.slice(8, 12)
    return (
        <div className={s.popularProducts}>
            <div className={s.titles}>
                <Title>{HomePopularProductsData.title}</Title>
                <SubTitle>{HomePopularProductsData.subTitle}</SubTitle>
                {isLoading && <Title>Loading</Title>}
                {error && <Title>{error}</Title>}
            </div>
            <ProductCard products={productsForPopularPage} />
        </div>
    );
};

export default HomePopularProducts;
