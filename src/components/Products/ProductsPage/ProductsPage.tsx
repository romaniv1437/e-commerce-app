import React from 'react';
import s from './ProductsPage.module.css'
import { RiSearchLine } from "react-icons/ri";
import {IProduct} from "../../../models/IProduct";
import ProductCard from "../../Home/HomeProducts/ProductsCard/ProductCard";

type PrivateProps = {
    products: Array<IProduct>,
    filter: {query:string},
    setFilter: ({query}:any) => void
    isLoading: boolean
}

const ProductsPage = ({products, filter, setFilter, isLoading}:PrivateProps) => {

    return (
        <div className={s.products__container}>
            <div className={s.search}>
                <input type="text" placeholder='search' value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}/>
                <RiSearchLine />
            </div>
            <ProductCard products={products}/>
            {isLoading && <div>loading</div>}
        </div>
    );
};

export default ProductsPage;
