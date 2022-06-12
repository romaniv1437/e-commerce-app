import React from 'react';
import s from './Navigation.module.css'
import DropdownMenu from "./DropdownMenu";
import {NavLink} from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className={s.navigation}>
            <DropdownMenu closeMenu={props.closeMenu} discovery_items={props.discovery_items}/>
            <NavLink onClick={props.closeMenu} to='/about'>About</NavLink>
            <NavLink onClick={props.closeMenu} to='/contact'>Contact Us</NavLink>
        </div>
    );
};

export default Navigation;
