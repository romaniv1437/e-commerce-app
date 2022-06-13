import React from 'react';
import s from './Home.module.css'
import HomeCard from "./HomeCard/HomeCard";

import {HomeCardData} from "../../data/HomeData";
import {HomeProductsData} from "../../data/HomeData";
import HomeProducts from "./HomeProducts/HomeProducts";

const Home = () => {
    return (
        <div className={s.home_main_page}>
            <div className={s.home}>
                <div className={s.home__container}>
                    <HomeCard HomeCardData={HomeCardData}/>
                </div>
            </div>
            <main className={s.products_page__container}>
                <HomeProducts HomeProductsData={HomeProductsData}/>
            </main>
        </div>

    );
};

export default Home;
