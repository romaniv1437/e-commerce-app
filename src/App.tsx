import './App.css';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {useEffect} from "react";
import {getPopularProductsForMainPage, getProductsForMainPage} from "./store/reducers/ActionCreators";
import ProductsContainer from "./components/Products/ProductsContainer";
import CartContainer from "./components/Cart/CartContainer";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";


function App() {
    // отримуємо useAppDispatch під іменем dispatch
    const dispatch = useAppDispatch();
    // отримуємо ліміт і вибрану сторінку через useAppSelector з productReducer
    const {limit, currentPage} = useAppSelector(state => state.productReducer)
    // в useEffect діспатчимо асинхронну функцію, а другим параметром передаємо зав"язаності з limit, currentPage
    // useEffect спрацює при першому заходженню на сторіку, і далі, якщо якісь з зав"язяаностей будуть мінятися
    useEffect(() => {
        dispatch(getProductsForMainPage());
        dispatch(getPopularProductsForMainPage({limit: 4, currentPage}))
    }, [dispatch, limit, currentPage])

    return (
        <div className='wrapper'>
            <Header/>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/products/:productName' element={<ProductsContainer />}/>
                    <Route path='/cart' element={<CartContainer />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/login' element={<Login />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;