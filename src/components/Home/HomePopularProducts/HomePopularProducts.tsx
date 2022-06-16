import React, {useEffect} from 'react';
import s from './HomePopularProducts.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getPopularProductsForMainPage} from "../../../store/reducers/ActionCreators";
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
    const dispatch = useAppDispatch();
    const {popularProducts, isLoading, error, currentPage} = useAppSelector(state => state.productReducer)
    useEffect(() => {
        dispatch(getPopularProductsForMainPage({limit: 4, currentPage}))
    }, [dispatch, currentPage])
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
