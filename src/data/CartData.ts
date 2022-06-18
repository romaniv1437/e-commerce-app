export interface cartDataInterface {
    title: string,
    link: string,
    table: Array<string>,
    remove: string,
    subTotal: string,
    subTotalTitle: string,
    buttonText: string
}

export const cartData = {
    title: 'Your cart items',
    link: 'Back to shopping',
    table: ['Product', 'Price', 'Quantity', 'Total'],
    remove: 'Remove',
    subTotal: 'Sub-total',
    subTotalTitle: 'Tax and shipping cost will be calculated later',
    buttonText: 'Check-out'
}