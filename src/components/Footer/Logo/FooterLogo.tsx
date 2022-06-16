import React from 'react';
import s from './FooterLogo.module.css'

type PrivateProps = {
    logo: string,
}

const FooterLogo = ({logo}: PrivateProps) => {
    return (
        <div className={s.logo}>
            <img src={logo} alt="footer_logo"/>
        </div>
    );
};

export default FooterLogo;
