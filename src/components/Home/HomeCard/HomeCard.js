import React from 'react';
import s from './HomeCard.module.css'
import CustomButton from "../../assets/Button/CustomButton";
import Title from "../../assets/Title/Title";

const HomeCard = (props) => {
    return (
        <div className={s.home_card}>
            <div className={s.card__titles}>
                <Title>{props.HomeCardData.icon}</Title>
                <Title>{props.HomeCardData.title}</Title>
                <p>{props.HomeCardData.subTitle}</p>
            </div>
            <CustomButton>{props.HomeCardData.buttonText}</CustomButton>
        </div>
    );
};

export default HomeCard;
