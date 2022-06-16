import logo from '../assets/photos/header/logo.svg'
import profile from '../assets/photos/header/Profile.svg'
import cart from '../assets/photos/header/Cart.svg'

export interface discoveryItem{
    id: number, name: string
}

export const discovery_items = [
    {id: 1, name: 'first'},
    {id: 2, name: 'second'},
    {id: 3, name: 'third'},
];

export const logoImage = logo;
export const profileImage = profile;
export const cartImage = cart;
