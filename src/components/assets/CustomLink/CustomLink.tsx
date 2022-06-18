import React from 'react';
import s from './CustomLink.module.css'
import {NavLink} from "react-router-dom";

const CustomLink = (props:any) => {
    return (
        <NavLink {...props} className={s.custom_link}>{props.children}</NavLink>
    );
};

export default CustomLink;
