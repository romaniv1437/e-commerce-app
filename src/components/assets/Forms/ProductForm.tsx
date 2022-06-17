import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from "../Button/CustomButton";
import cartImage from "../../../assets/photos/decor/Vector.svg";
import s from './ProductForm.module.css'
import FormInput from "./FormAssets/FormInput";
import {NavLink} from "react-router-dom";
import FormSelect from "./FormAssets/FormSelect/FormSelect";

type PrivateProps = {
    buttonText: string,
    inputName: string,
    choiceOneTime: string,
    choiceSubscribe: { title: string, subTitle: string }
}

const ProductForm = ({buttonText, inputName, choiceOneTime, choiceSubscribe}: PrivateProps) => {
    return (
        <Formik
            initialValues={{Quantity: 1, choiceOneTime: false, choiceSubscribe: false}}
            validationSchema={Yup.object({
                Quantity: Yup.number()
                    .min(1, 'Min 1')
            })}
            onSubmit={(values) => {
                console.log(values)
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

                <CustomButton type="submit"><img src={cartImage} alt="cart"/> {buttonText}</CustomButton>
            </Form>
        </Formik>
    );
};

export default ProductForm;