import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './HeroBanner.module.scss';
import Slide from './component/Slider';

const cx = classNames.bind(styles);

function HeroBanner({ data }) {
    return (
        <div className={cx('wrapper')}>
            {/* Category */}
            <div className={cx('category-wrapper')}>
                <div className={cx('category-inner')}>
                    {data.map((item, index) => (
                        <Link
                            key={item.id}
                            className={cx('item-list')}
                            to={`/productList/advanced-search?categoryId=${item.id}&PageIndex=1&PageSize=9`}
                        >
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
