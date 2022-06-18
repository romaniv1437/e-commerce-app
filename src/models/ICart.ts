export interface ICartProduct {
    id: number,
    productId: number,
    count: number,
    productTitle: string,
    productImage: string,
    price: number
}

export interface ICart {
    id: number;
    userId: number;
    cartProducts: Array<ICartProduct>;
    totalPrice: number;
}