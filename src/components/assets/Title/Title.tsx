import React from 'react';
import s from './Title.module.css'

const Title = (props:any) => {
    return <h2 className={s.title}>{props.children}</h2>
};

export default Title;
