import classNames from 'classnames/bind';
import { RightOutlined, LeftOutlined } from '@ant-design/icons/lib/icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './BrowseCategory.module.scss';
import SmallNotification from '~/component/SmallNotification';
import CategoryCard from './CategoryCard';
import { Carousel, Stack } from 'react-bootstrap';
import Button from '~/component/Button';
import Separator from '~/component/Separator/Separator';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

const chunkSize = 6;

const categories = [
    { _id: 1, img: require('~/public/uploads/categoriesicon/caseicon.png'), name: 'Case' },
    { _id: 2, img: require('~/public/uploads/categoriesicon/cpuicon.png'), name: 'CPU' },
    { _id: 3, img: require('~/public/uploads/categoriesicon/dvdicon.png'), name: 'DVD' },
    { _id: 4, img: require('~/public/uploads/categoriesicon/fanicon.png'), name: 'Power' },
    { _id: 5, img: require('~/public/uploads/categoriesicon/hhdicon.png'), name: 'HHD' },
    { _id: 6, img: require('~/public/uploads/categoriesicon/ramicon.png'), name: 'Ram' },
    { _id: 7, img: require('~/public/uploads/categoriesicon/caseicon.png'), name: 'Case' },
    { _id: 8, img: require('~/public/uploads/categoriesicon/dvdicon.png'), name: 'DVD' },
    { _id: 9, img: require('~/public/uploads/categoriesicon/ramicon.png'), name: 'Ram' },
];
const chunks = [];
for (let i = 0; i < categories.length; i += chunkSize) {
    const chunk = categories.slice(i, i + chunkSize);
    chunks.push(chunk);
}

function BrowseCategory() {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

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
            <div className={cx('wrapper-nextarrow')}>
                <RightOutlined className={cx('nextArrow')} onClick={onClick} />
            </div>
        );
    }
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
        PrevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        className: 'sliders',
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* small notify*/}
                <SmallNotification notify={`Categories`} />

                {/* title */}
                <div className={cx('title')}>
                    {/* title */}
                    <h1 className={cx('text-title')}>Browse By Categories</h1>
                </div>

                {/* product */}
                <div className={cx('category-list')}>
                    <div className="container">
                        <Slider {...settings}>
                            {categories.map((item, index) => (
                                <CategoryCard
                                    data={item}
                                    key={index}
                                    isActive={activeCategory === item._id}
                                    onClick={handleCategoryClick}
                                />
                            ))}
                        </Slider>
                    </div>

                    {/* <Slider /> */}
                </div>

                <Separator className={cx('separator')} />
            </div>
        </div>
    );
}

export default BrowseCategory;
