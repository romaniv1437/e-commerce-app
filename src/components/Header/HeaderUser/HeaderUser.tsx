import React from 'react';
import s from './HeaderUser.module.css'
import {NavLink} from "react-router-dom";

type PrivateProps = {
    profileImage: string,
    cartImage: string
}

const HeaderUser = ({profileImage, cartImage}:PrivateProps) => {
    return (
        <div className={s.header_user}>
            <NavLink to='/profile'><img src={profileImage} alt="profile"/></NavLink>
            <NavLink to='/cart'><img src={cartImage} alt="cart"/></NavLink>
        </div>
    );
};

export default HeaderUser;
