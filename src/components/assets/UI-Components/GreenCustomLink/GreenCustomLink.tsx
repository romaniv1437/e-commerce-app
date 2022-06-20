import React from 'react';
import s from './GreenCustomLink.module.css'
import {NavLink} from "react-router-dom";

const GreenCustomLink = (props:any) => {
    return (
        <NavLink {...props} className={s.green_link}>{props.children}</NavLink>
    );
};

export default GreenCustomLink;
