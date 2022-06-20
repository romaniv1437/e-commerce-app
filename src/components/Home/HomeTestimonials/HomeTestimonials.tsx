import React from 'react';
import s from './HomeTestimonials.module.css'
import {testimonialItem} from "../../../data/HomeData";
import Title from "../../assets/UI-Components/Title/Title";
import SubTitle from "../../assets/UI-Components/SubTitle/SubTitle";

type PrivateProps = {
    HomeTestimonialsData: {
        title: string,
        subTitle: string,
        testimonials: Array<testimonialItem>
    }
}

const HomeTestimonials = ({HomeTestimonialsData}: PrivateProps) => {

    const rateItem = <img src={HomeTestimonialsData.testimonials[0].rate} alt="testimonial_rate"/>

    const testimonialItem = HomeTestimonialsData.testimonials.map((testimonial, index) => <div key={index} className={s.testimonial_item}>
        <img src={testimonial.image} alt="testimonial"/>
        <div className={s.rate}>{rateItem} {rateItem} {rateItem} {rateItem} {rateItem}</div>
        <h2 className={s.testimonial_quote}>{testimonial.quote}</h2>
        <p className={s.testimonial_name}>{testimonial.name}</p>
    </div>)

    return (
        <div className={s.testimonial}>
            <div className={s.titles}>
                <Title>{HomeTestimonialsData.title}</Title>
                <SubTitle>{HomeTestimonialsData.subTitle}</SubTitle>
            </div>
            <div className={s.testimonial_flex}>
                {testimonialItem}
            </div>
        </div>
    );
};

export default HomeTestimonials;
