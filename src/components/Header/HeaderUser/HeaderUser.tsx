import React from 'react';
import s from './HeaderUser.module.css'
import {NavLink} from "react-router-dom";

type PrivateProps = {
    profileImage: string,
    cartImage: string,
    count: number
}

const HeaderUser = ({profileImage, cartImage, count}:PrivateProps) => {
    return (
        <div className={s.header_user}>
            <NavLink to='/profile'><img src={profileImage} alt="profile"/></NavLink>
            <NavLink to='/cart' className={s.cart} data-count={count}><img src={cartImage} alt="cart"/></NavLink>
        </div>
    );
};

export default HeaderUser;
