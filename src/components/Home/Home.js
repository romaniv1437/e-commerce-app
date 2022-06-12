import React from 'react';
import s from './Home.module.css'
import HomeCard from "./HomeCard/HomeCard";

import {HomeCardData} from "../../data/HomeData";

const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.home__container}>
                <HomeCard HomeCardData={HomeCardData}/>
            </div>
        </div>
    );
};

export default Home;
