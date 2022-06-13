import React from 'react';
import s from './HomeCard.module.css'
import CustomButton from "../../assets/Button/CustomButton";
import Title from "../../assets/Title/Title";
import {NavLink} from "react-router-dom";

const HomeCard = (props:any) => {
    return (
        <div className={s.home_card}>
            <div className={s.card__titles}>
                <Title>{props.HomeCardData.icon}</Title>
                <Title>{props.HomeCardData.title}</Title>
                <p>{props.HomeCardData.subTitle}</p>
            </div>
            <NavLink to='/discovery'><CustomButton>{props.HomeCardData.buttonText}</CustomButton></NavLink>
        </div>
    );
};

export default HomeCard;
