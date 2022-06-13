import React from 'react';
import s from './HeaderUser.module.css'
import {NavLink} from "react-router-dom";

const HeaderUser = (props:any) => {
    return (
        <div className={s.header_user}>
            <NavLink to='/profile'><img src={props.profileImage} alt="profile"/></NavLink>
            <NavLink to='/cart'><img src={props.cartImage} alt="cart"/></NavLink>
        </div>
    );
};

export default HeaderUser;
