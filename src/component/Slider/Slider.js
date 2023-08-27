import React from 'react';
import SliderProduct from 'react-slick';
import ProductCard from '../ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons/lib/icons';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider({ arrowVisible = true, rowNumber = 1 }) {
    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
                className={cx('prevIcon')}
                style={{ ...style, display: 'block', background: 'green' }}
                onClick={onClick}
            />
        );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={cx('wrapper-nextarrow', props)}>
                <RightOutlined className={cx('nextArrow')} onClick={onClick} />
            </div>
        );
    }

    var settings = {
        arrows: arrowVisible,
        rows: rowNumber,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        PrevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="container">
            <SliderProduct {...settings}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </SliderProduct>
        </div>
    );
}

export default Slider;
