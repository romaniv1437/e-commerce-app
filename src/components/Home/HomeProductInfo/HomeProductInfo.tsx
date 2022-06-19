import React from 'react';
import s from './HomeProductInfo.module.css'
import {descriptionItem} from "../../../data/HomeData";
import CustomButton from "../../assets/Button/CustomButton";
import {NavLink} from "react-router-dom";

type PrivateProps = {
    HomeProductInfoData: {
        title: string,
        subTitle: string, description: Array<descriptionItem>,
        buttonText: string, image: string
    }
}

const HomeProductInfo = ({HomeProductInfoData}: PrivateProps) => {

    const description = HomeProductInfoData.description.map((item, index) => <div key={index} className={s.description_item}>
        <img src={item.image} alt="description_image"/>
        <span>{item.name}:</span>
        <p>{item.info}</p>
    </div>)

    return (
        <div className={s.productInfo}>
            <div className={s.left}>
                <div className={s.titles}>
                    <h2 className={s.title}>{HomeProductInfoData.title}</h2>
                    <p className={s.sub_title}>{HomeProductInfoData.subTitle}</p>
                </div>
                <div className={s.description}>
                    {description}
                </div>
                <div className={s.bottom_button}>
                    <NavLink to='/'><CustomButton>{HomeProductInfoData.buttonText}</CustomButton></NavLink>
                </div>
            </div>
            <div className={s.right}>
                <img src={HomeProductInfoData.image} alt="info_image"/>
            </div>
        </div>
    );
};

export default HomeProductInfo;
