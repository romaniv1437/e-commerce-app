import React from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import s from './Products.module.css'
import {ProductData} from "../../data/ProductData";
import ProductForm from "../assets/Forms/ProductForm";

const Products = () => {
    const params = useParams();
    const {products, popularProducts} = useAppSelector(state => state.productReducer)
    const allProducts = products.concat(popularProducts)
    const currentProduct = allProducts.filter(product => product.title === params.productName)

    return (
        <div className={s.product}>
            <main className={s.product__container}>
                <div className={s.left}>
                    <img src={currentProduct[0].imageURL} alt="products"/>
                    <div className={s.left_titles}>
                        <h2 className={s.title}>{ProductData.details}</h2>
                        <h2 className={s.subTitle}>{ProductData.shipping}</h2>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.right_title}>
                        <h2 className={s.title}>{currentProduct[0].title}</h2>
                        <h2 className={s.price}>$ {currentProduct[0].price}.00</h2>
                    </div>
                    <div className={s.right_form}>
                        <ProductForm buttonText={ProductData.buttonText}
                                     inputName={ProductData.inputName}
                                     choiceOneTime={ProductData.choiceOneTime}
                                     choiceSubscribe={ProductData.choiceSubscribe}/>
                    </div>
                    <div className={s.right_description}>
                        <p>{currentProduct[0].description}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Products;
