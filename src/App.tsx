import './App.css';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer';
import Products from "./components/Products/Products";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {useEffect} from "react";
import {getProductsForMainPage} from "./store/reducers/ActionCreators";


function App() {

    const dispatch = useAppDispatch();
    const {limit, currentPage} = useAppSelector(state => state.productReducer)

    useEffect(() => {
        dispatch(getProductsForMainPage({limit, currentPage}))
    }, [dispatch, limit, currentPage])
  return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products/:productName' element={<Products />}/>
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;