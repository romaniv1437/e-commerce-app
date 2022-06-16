import React from 'react';
import s from "../Header.module.css";
import {NavLink} from "react-router-dom";

type PrivateProps = {
    logoImage: string
}

const Logo = ({logoImage}:PrivateProps) => {
    return (
        <div className={s.logo}>
            <NavLink to='/'>
                <img src={logoImage} alt=""/>
            </NavLink>
        </div>
    );
};

export default Logo;
