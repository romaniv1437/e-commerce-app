import React from 'react';
import s from './Login.module.css'
import LoginForm from "../assets/Forms/LoginForm/LoginForm";

const Login = () => {
    return (
        <main className={s.login}>
            <section className={s.login__container}>
                <h2>Login</h2>
                <LoginForm />
            </section>
        </main>

    );
};

export default Login;
