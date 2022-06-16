import infoDataImage from '../assets/photos/home/productInfo/product_infoPage_decor.jpg'
import descriptionImage from '../assets/photos/home/productInfo/descriptionImage.svg'
import star from '../assets/photos/home/testimonials/Star.svg'
import testimonial1 from '../assets/photos/home/testimonials/img.svg'
import testimonial2 from '../assets/photos/home/testimonials/img-1.svg'
import testimonial3 from '../assets/photos/home/testimonials/img-2.svg'

export interface descriptionItem {
    image: string,
    name: string,
    info: string
}
export interface testimonialItem {
    image: string,
    rate: string,
    quote: string,
    name: string
}

export const HomeCardData = {
    icon: '🌱',
    title: 'The nature candle',
    subTitle: 'All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments',
    buttonText: 'Discovery our collection'
}
export const HomeProductsData = {
    title: 'Products',
    subTitle: 'Order it for you or for your beloved ones'
}
export const HomeProductInfoData = {
    title: 'Clean and fragrant soy wax',
    subTitle: 'Made for your home and for your wellness',
    description: [
        {image: descriptionImage, name: 'Eco-sustainable', info: 'All recyclable materials, 0% CO2 emissions'},
        {image: descriptionImage, name: 'Hyphoallergenic', info: '100% natural, human friendly ingredients'},
        {image: descriptionImage, name: 'Handmade', info: 'All candles are craftly made with love.'},
        {image: descriptionImage, name: 'Long burning', info: 'No more waste. Created for last long.'},
    ],
    buttonText: 'Learn more',
    image: infoDataImage
}
export const HomeTestimonialsData = {
    title: 'Testimonials',
    subTitle: 'Some quotes from our happy customers',
    testimonials: [
        {image: testimonial1, rate: star, quote: '“I love it! No more air fresheners”', name: 'Luisa'},
        {image: testimonial2, rate: star, quote: '“Raccomended for everyone”', name: 'Edoardo'},
        {image: testimonial3, rate: star, quote: '“Looks very natural, the smell is awesome”', name: 'Mart'}
    ]
}
export const HomePopularProductsData = {
    title: 'Popular',
    subTitle: 'Our top selling product that you may like'
}