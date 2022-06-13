import React from 'react';
import s from './HomeProducts.module.css'
import Title from "../../assets/Title/Title";
import SubTitle from "../../assets/SubTitle/SubTitle";

const HomeProducts = (props:any) => {
    return (
        <div className={s.home_products}>
            <Title>{props.HomeProductsData.title}</Title>
            <SubTitle>{props.HomeProductsData.subTitle}</SubTitle>
        </div>
    );
};

export default HomeProducts;
