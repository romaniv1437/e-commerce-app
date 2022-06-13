import React from 'react';
import s from './Header.module.css'
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import HeaderUser from "./HeaderUser/HeaderUser";

import {cartImage, logoImage} from "../../data/HeaderData";
import {profileImage} from "../../data/HeaderData";
import {discovery_items} from "../../data/HeaderData";
import MenuBurger from "./MenuBurger/MenuBurger";
import useWindowDimensions from "../../assets/hooks/useWindowDimensions";

const Header = () => {
    const { width } = useWindowDimensions();
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <Logo logoImage={logoImage}/>
                {width <= 768 ?  <MenuBurger discovery_items={discovery_items}/> : <Navigation discovery_items={discovery_items}/> }
                <HeaderUser profileImage={profileImage} cartImage={cartImage}/>
            </div>
        </header>
    );
};

export default Header;
