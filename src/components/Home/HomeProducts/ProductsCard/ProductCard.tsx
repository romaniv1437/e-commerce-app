import React from 'react';
import s from './Product.module.css'

type product = {
    id: number, title: string, imageURL: string, price: number
}

type PrivateProps = {
    products: Array<product>
}

const ProductCard = ({products}:PrivateProps) => {
    if (Array.isArray(products)) {
        const home_products = products.map((product) => <div key={product.id} className={s.product}>
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
