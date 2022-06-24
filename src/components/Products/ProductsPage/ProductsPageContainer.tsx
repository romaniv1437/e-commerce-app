import React, {useMemo, useState} from 'react';
import ProductsPage from "./ProductsPage";
import {useAppSelector} from "../../../hooks/redux";

const ProductsPageContainer = () => {
    const [filter, setFilter] = useState({query: ''})
    const {products, isLoading} = useAppSelector(state => state.productReducer)
    const searchedTask = useMemo(() => {
        if (filter.query) {
            return [...products].filter(task => task.title.toLowerCase().includes(filter.query.toLowerCase()))
        }
        return products
    }, [filter.query, products])
    return <div>
        <ProductsPage products={searchedTask} filter={filter} setFilter={setFilter} isLoading={isLoading}/>
    </div>

};

export default ProductsPageContainer;
