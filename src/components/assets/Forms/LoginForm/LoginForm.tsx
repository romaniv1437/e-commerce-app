import React from 'react';
import {Field, Form, Formik} from 'formik';
import s from './LoginForm.module.css'
import * as Yup from 'yup';
import CustomButton from "../../Button/CustomButton";

const LoginForm = () => {
    return (
        <Formik
            initialValues={{ password: '', email: '' }}
            validationSchema={Yup.object({
                password: Yup.string()
                    .max(25, 'Must be 25 characters or less')
                    .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className={s.login_form}>

                <Field name="email" type="email" placeholder='email'/>

                <Field name="password" type="password" placeholder='password'/>

                <CustomButton>Login</CustomButton>
            </Form>
        </Formik>
    );
};

export default LoginForm