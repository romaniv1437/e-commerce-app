import React from 'react';
import s from './GreenCustomButton.module.css'

const GreenCustomButton = (props:any) => {
    return <button className={s.green_button} {...props}>{props.children}</button>
};

export default GreenCustomButton;
