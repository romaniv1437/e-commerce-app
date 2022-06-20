import React from 'react';
import s from './HomeCard.module.css'
import GreenCustomLink from "../../assets/UI-Components/GreenCustomLink/GreenCustomLink";
import Title from "../../assets/UI-Components/Title/Title";

type PrivateProps = {
    HomeCardData: {icon: string, title: string, subTitle: string, buttonText: string }
}

const HomeCard = ({HomeCardData}:PrivateProps) => {
    return (
        <div className={s.home_card}>
            <div className={s.card__titles}>
                <Title>{HomeCardData.icon}</Title>
                <Title>{HomeCardData.title}</Title>
                <p>{HomeCardData.subTitle}</p>
            </div>
            <GreenCustomLink to='/products'>{HomeCardData.buttonText}</GreenCustomLink>
        </div>
    );
};

export default HomeCard;
