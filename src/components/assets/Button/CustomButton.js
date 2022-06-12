import React from 'react';
import s from './CustomButton.module.css'

const CustomButton = (props) => {
    return (
        <button {...props} className={s.default_button}>{props.children}</button>
    );
};

export default CustomButton;
