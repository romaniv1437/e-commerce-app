import React from 'react';
import s from './Home.module.css'
import HomeCard from "./HomeCard/HomeCard";

import {HomeCardData, HomeTestimonialsData, HomeProductsData, HomeProductInfoData, HomePopularProductsData} from "../../data/HomeData";
import HomeProducts from "./HomeProducts/HomeProducts";
import HomeProductInfo from "./HomeProductInfo/HomeProductInfo";
import HomeTestimonials from "./HomeTestimonials/HomeTestimonials";
import HomePopularProducts from './HomePopularProducts/HomePopularProducts';

const Home = () => {
    return (
        <div className={s.home_main_page}>
            <main className={s.home}>
                <section className={s.home__container}>
                    <HomeCard HomeCardData={HomeCardData}/>
                </section>
            </main>
            <main className={s.products_page__container}>
                <HomeProducts HomeProductsData={HomeProductsData}/>
            </main>
            <main className={s.products_info}>
                <section className={s.products_info__container}>
                    <HomeProductInfo HomeProductInfoData={HomeProductInfoData} />
                </section>
            </main>
            <main className={s.testimonials}>
                <section className={s.testimonials__container}>
                    <HomeTestimonials HomeTestimonialsData={HomeTestimonialsData} />
                </section>
            </main>
            <main className={s.popular_products}>
                <section className={s.popular_products__container}>
                    <HomePopularProducts HomePopularProductsData={HomePopularProductsData}/>
                </section>
            </main>
        </div>

    );
};

export default Home;
