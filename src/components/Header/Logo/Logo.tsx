import React from 'react';
import s from "../Header.module.css";
import {NavLink} from "react-router-dom";

const Logo = (props:any) => {
    return (
        <div className={s.logo}>
            <NavLink to='/home'>
                <img src={props.logoImage} alt=""/>
            </NavLink>
        </div>
    );
};

export default Logo;
