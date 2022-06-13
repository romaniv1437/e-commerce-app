import React from 'react';
import s from './Product.module.css'

const ProductCard = (props:any) => {
    debugger
    if (Array.isArray(props.products)) {
        const home_products = props.products.map((product:any) => <div key={product.id} className={s.product}>
            <a href={`/products/${product.title}`}>
                <img src={product.imageURL} alt="product"/>
                <div className={s.product_info}>
                    <p className={s.title}>{product.title}</p>
                    <p className={s.price}>{product.price}.00</p>
                </div>
            </a>
        </div>);
        return (
            <div className={s.product_flex}>
                {home_products}
            </div>
        );
    } else {
        return <div>No products</div>
    }

};

export default ProductCard;
