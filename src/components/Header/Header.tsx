import React from 'react';
import s from './Header.module.css'
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import HeaderUser from "./HeaderUser/HeaderUser";

import {cartImage, discovery_items, logoImage, profileImage} from "../../data/HeaderData";
import MenuBurger from "./MenuBurger/MenuBurger";

type PrivateProps = {
    width: number,
    count: number
}

const Header = ({width, count}:PrivateProps) => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <Logo logoImage={logoImage}/>
                {width <= 768 ?  <MenuBurger discovery_items={discovery_items}/> : <Navigation discovery_items={discovery_items}/> }
                <HeaderUser profileImage={profileImage} cartImage={cartImage} count={count}/>
            </div>
        </header>
    );
};

export default Header;
