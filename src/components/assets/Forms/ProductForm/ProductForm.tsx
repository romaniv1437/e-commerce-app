import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import cartImage from "../../../../assets/photos/decor/Vector.svg";
import greenCartImage from "../../../../assets/photos/decor/green_cart.svg";
import s from './ProductForm.module.css'
import FormInput from "../FormAssets/FormInput";
import {useNavigate , NavLink} from "react-router-dom";
import FormSelect from "../FormAssets/FormSelect/FormSelect";
import CustomLink from "../../UI-Components/CustomLink/CustomLink";
import {ICartProduct} from "../../../../models/ICart";
import {IProduct} from "../../../../models/IProduct";
import GreenCustomButton from "../../UI-Components/GreenCustomButton/GreenCustomButton";

type PrivateProps = {
    buttonText: string,
    inputName: string,
    choiceOneTime: string,
    choiceSubscribe: { title: string, subTitle: string },
    addProducts: (id: number, productId:number, productTitle:string, productImage:string, price: number, count:number) => void,
    cartProducts: Array<ICartProduct>,
    currentProduct: IProduct,
}

const ProductForm = ({buttonText, inputName, choiceOneTime, choiceSubscribe, addProducts, currentProduct, cartProducts}: PrivateProps) => {
    let navigate = useNavigate();
    return (
        <Formik
            initialValues={{Quantity: 1, choiceOneTime: false, choiceSubscribe: false}}
            validationSchema={Yup.object({
                Quantity: Yup.number()
                    .min(1, 'Min 1')
            })}
            onSubmit={(values) => {
                addProducts(
                    Date.now(),
                    currentProduct.id,
                    currentProduct.title,
                    currentProduct.imageURL,
                    currentProduct.price,
                    values.Quantity
                )
                navigate('/cart')

            }}
        >
            <Form className={s.form}>
                <div className={s.inputs}>
                    <div className={s.quantity}>
                        <FormInput inputName={inputName} placeHolder='1' type='number' name='Quantity'/>
                    </div>
                    <div className={s.choice}>
                        <FormInput inputName={choiceOneTime} placeHolder='oneTime' type='checkbox' name='choiceOneTime'/>
                        <div className={s.choice_subscribe}>
                            <div className={s.subscribe_inputs}>
                                <FormInput inputName={choiceSubscribe.title} placeHolder='subscribe' type='checkbox' name='choiceSubscribe'/>
                                <FormSelect defaultValue='Subscribe Time'
                                            options={[
                                                {value: '4 weeks'},
                                                {value: '2 weeks'},
                                                {value: '1 week'}]}/>
                            </div>
                            <div className={s.details}>
                                <p>{choiceSubscribe.subTitle} <span><NavLink to='/'>See Details</NavLink></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                {cartProducts.some(p => p.productId === currentProduct.id) ?
                    <CustomLink to='/cart'>
                        <img src={greenCartImage} alt="cart"/> + Already in cart
                    </CustomLink> :
                    <GreenCustomButton type='submit'>
                        <img src={cartImage} alt="cart"/> {buttonText}
                    </GreenCustomButton>}
            </Form>
        </Formik>
    );
};

export default ProductForm;