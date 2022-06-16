import React from 'react';

type product = {
    id: number, title: string, imageURL: string, price: number
}

type PrivateProps = {
    popularProducts: Array<product>
}

const PopularProductsCard = ({popularProducts}:PrivateProps) => {
    return (
        <div>

        </div>
    );
};

export default PopularProductsCard;
