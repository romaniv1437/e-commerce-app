import React from 'react';
import s from './Cart.module.css'
import {ICartProduct} from "../../models/ICart";
import {cartDataInterface} from "../../data/CartData";
import {NavLink} from "react-router-dom";
import CartInputForm from "../assets/Forms/CartInputForm/CartInputForm";
import CustomLink from '../assets/CustomLink/CustomLink';

type PrivateProps = {
    cartProducts: Array<ICartProduct>,
    cartData: cartDataInterface,
    totalPrice: number,
    changeQTY: (id: number, count: number) => void,
    removeProduct: (id: number) => void
}

const Cart = ({cartProducts, cartData, changeQTY, removeProduct, totalPrice}: PrivateProps) => {

    const columns = cartData.table.map((column, index) => <p key={index}>{column}</p>)
    const products = cartProducts.map(product => {
            return <div key={product.id} className={s.product}>
                <div className={s.left}>
                    <img src={product.productImage} alt="cart_product"/>
                    <div className={s.left_titles}>
                        <NavLink to={`/products/${product.productTitle}`}>{product.productTitle}</NavLink>
                        <p className={s.link} onClick={() => removeProduct(product.id)}>{cartData.remove}</p>
                    </div>
                </div>
                <div className={s.right}>
                    <p>$ {product.price}</p>
                    <CartInputForm cartProductId={product.id} count={product.count} changeQTY={changeQTY}/>
                    <p>$ {product.totalPrice}</p>
                </div>
            </div>
        }
    )

    return (
        <main className={s.cart}>
            <section className={s.cart__container}>
                <div className={s.cart_flex}>
                    {cartProducts.length === 0 ?
                        <div className={s.titles}>
                            <h2>Your cart is empty</h2>
                            <NavLink to='/' className={s.link}>Go to shop</NavLink>
                        </div> : <div>
                            <div className={s.titles}>
                                <h2>{cartData.title}</h2>
                                <NavLink to='/' className={s.link}>{cartData.link}</NavLink>
                            </div>
                            <div className={s.table}>
                                <div className={s.column_names}>
                                    {columns}
                                </div>
                                <div className={s.product_flex}>
                                    {products}
                                </div>
                            </div>
                            <div className={s.subTotal_container}>
                                <div className={s.subTotal}>
                                    <div className={s.totalPrice}>
                                    <span>
                                        <p>{cartData.subTotal}</p>
                                        <p>$ {totalPrice}</p>
                                    </span>
                                        <p>{cartData.subTotalTitle}</p>
                                    </div>
                                    <CustomLink to='/profile'>{cartData.buttonText}</CustomLink>
                                </div>
                            </div>
                        </div>}
                </div>
            </section>
        </main>
    );
};

export default Cart;
