import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import './slider.css';

const cx = classNames.bind(styles);

function Slide() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const slides = [
        {
            image: require('~/public/uploads/slides/Slider_HeroBanner_P600s.png'),

            interval: 1500,
        },
        {
            image: require('~/public/uploads/slides/Slider_HeroBanner_slider2.jpeg'),

            interval: 500,
        },
        {
            image: require('~/public/uploads/slides/Slider_heroBanner_slider1.jpg'),

            interval: 2500,
        },
    ];

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            nextIcon={<span aria-hidden="true" className={cx('carousel-control-next-icon changed')} />}
        >
            {slides.map((slide) => (
                <Carousel.Item key={slide.image} interval={slide.interval}>
                    <img src={slide.image} alt="First slide" className={cx('slider-banner')} />
                    <Carousel.Caption>
                        <h3>{slide.title}</h3>
                        <p>{slide.subTitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slide;
