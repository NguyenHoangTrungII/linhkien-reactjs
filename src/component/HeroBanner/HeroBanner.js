import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import styles from './HeroBanner.module.scss';
import Slide from './component/Slider';

const cx = classNames.bind(styles);

function HeroBanner() {
    const category = [
        {
            name: 'CPU',
            _id: '64a051007880d7c1ef9f0c8b',
        },
        {
            name: 'RAM',
            _id: '64a051007880d7c1ef9f0c8b',
        },
        {
            name: 'HHD',
            _id: '64a0515c7880d7c1ef9f0d53',
        },
        {
            name: 'SSD',
            _id: '64a051a57880d7c1ef9f0e20',
        },
        {
            name: 'VGA CARD',
            _id: '64a051f47880d7c1ef9f0ee8',
        },
        {
            name: 'SOUND CARD',
            _id: '64a051f47880d7c1ef9f0ee9',
        },
        {
            name: 'CASE',
            _id: '64a051f47880d7c1ef9f0ee3',
        },
        {
            name: 'POWER',
            _id: '64a051f47880d7c1ef9f0ee4',
        },
        {
            name: 'MAINBOARD',
            _id: '64a051f47880d7c1ef9f0ee2',
        },
        {
            name: 'DVD',
            _id: '64a051f47880d7c1ef9f0ee1',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {/* Category */}
            <div className={cx('category-wrapper')}>
                <div className={cx('category-inner')}>
                    {category.map((item, index) => (
                        <Link key={item._id} className={cx('item-list')}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            {/* Hero Banner */}
            <div className={cx('slider-wrapper')}>
                <div className={cx('slider-inner')}>
                    <Slide />
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
