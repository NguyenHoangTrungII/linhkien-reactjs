import classNames from 'classnames/bind';

import styles from './FeaturedCard.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function FeaturedCard({ size, data }) {
    // Tạo dynamic class name dựa trên prop size
    const dynamicClassName = cx('container', {
        small: size === 'small',
        medium: size === 'medium',
        large: size === 'large',
    });

    return (
        <div className={dynamicClassName}>
            {/* img */}
            <img src={data.img} className={cx('img')} />
            <div className={cx('content')}>
                {/* featured */}
                <span className={cx('featured')}>{data.title}</span>

                {/* content */}
                <p className={cx('summary')}>{data.content}</p>

                {/* more */}
                <Link className={cx('buy-now')}>Buy Now</Link>
            </div>
        </div>
    );
}

export default FeaturedCard;
