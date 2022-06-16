import React from 'react';
import s from './Footer.module.css'
import FooterLogo from "./Logo/FooterLogo";
import {FooterData} from "../../data/FooterData";
import FooterColumns from "./Columns/FooterColumns";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__container}>
                <div className={s.left}>
                    <FooterLogo logo={FooterData.logo} />
                    <p className={s.description}>{FooterData.description}</p>
                </div>
                <div className={s.right}>
                    <FooterColumns columns={FooterData.columns} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
