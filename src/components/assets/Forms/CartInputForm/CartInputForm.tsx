import React from 'react';
import s from './CartInputForm.module.css'
import {Field, Form, Formik} from 'formik';
import * as Yup from "yup";

type PrivateProps = {
    count: number,
    cartProductId: number,
    changeQTY: (id: number, count: number) => void
}

const ProductForm = ({changeQTY, cartProductId, count}:PrivateProps) => {
    return (
        <Formik
            initialValues={{count: count}}
            validationSchema={Yup.object({
                count: Yup.number()
                    .min(1, 'Min 1')
                    .required()
            })}
            onSubmit={(values) => {
               console.log(values)
                // @ts-ignore
                const count = values[Object.keys(values)[0]]
                changeQTY(cartProductId, count)
            }}>
            <Form className={s.form}>
                <Field name='count' type='number' placeholder='1' min='1' />
            </Form>
        </Formik>
    );
};

export default ProductForm;