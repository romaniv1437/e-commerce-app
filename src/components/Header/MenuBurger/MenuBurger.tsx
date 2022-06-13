import React, {useState} from 'react';
import './MenuBurger.css'
import { slide as Menu } from 'react-burger-menu'
import Navigation from "../Navigation/Navigation";

const MenuBurger = (props:any) => {

    const [isOpen, setOpen] = useState(false)
    const handleIsOpen = () => setOpen(!isOpen)
    const closeSideBar = () => setOpen(false)

    return (
        <Menu isOpen={isOpen}
              onOpen={handleIsOpen}
              onClose={handleIsOpen}>
            <Navigation closeMenu={closeSideBar} discovery_items={props.discovery_items}/>
        </Menu>
    );
};

export default MenuBurger;
