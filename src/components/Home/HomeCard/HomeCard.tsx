import React from 'react';
import s from './HomeCard.module.css'
import CustomButton from "../../assets/Button/CustomButton";
import Title from "../../assets/Title/Title";
import {NavLink} from "react-router-dom";

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
            <NavLink to='/'><CustomButton>{HomeCardData.buttonText}</CustomButton></NavLink>
        </div>
    );
};

export default HomeCard;
