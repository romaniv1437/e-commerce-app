import React from 'react';
import s from './SubTitle.module.css'

const SubTitle = (props:any) => {
    return <p className={s.sub_title}>{props.children}</p>
};

export default SubTitle;
