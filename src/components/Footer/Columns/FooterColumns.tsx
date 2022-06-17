import React from 'react';
import {columns} from "../../../data/FooterData";
import s from './FooterColumns.module.css'

type PrivateProps = {
    columns: Array<columns>
}

const FooterColumns = ({columns}: PrivateProps) => {

    const column_el = columns.map((column, index) => <div key={index} className={s.column}>
        <p className={s.title}>{column.title}</p>
        {column.subTitle.map((subTitle, index) => <p key={index} className={s.subTitle}>{subTitle}</p>)}
    </div>)

    return (
        <div className={s.column_flex}>
            {column_el}
        </div>
    );
};

export default FooterColumns;
