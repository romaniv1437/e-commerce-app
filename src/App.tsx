import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {useEffect} from "react";
import {getProductsForMainPage} from "./store/reducers/ActionCreators";
import ProductsContainer from "./components/Products/ProductsContainer";
import CartContainer from "./components/Cart/CartContainer";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

import {cartSlice} from "./store/reducers/CartSlice";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    const dispatch = useAppDispatch();
    const {currentPage, limit} = useAppSelector(state => state.productReducer)
    const {setCart} = cartSlice.actions

    useEffect(() => {
        dispatch(setCart({id: Date.now(), userId: 1, cartProducts: [], totalPrice: 0}))
        dispatch(getProductsForMainPage({limit, currentPage}));
    }, [dispatch, limit, currentPage, setCart])

    return (
        <div className='wrapper'>
            <HeaderContainer />
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/products/:productName' element={<ProductsContainer />}/>
                    <Route path='/products' element={<div>products</div>}/>
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