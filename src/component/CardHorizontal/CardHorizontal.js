import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardHorizontal.module.scss';
import Image from '~/component/image';

const cx = classNames.bind(styles);

function CardHorizontal({ data }) {
    return (
        <Link to={`/ProductDetail/:${data._id}`} className={cx('wrapper')}>
            {/* image */}
            <Image className={cx('product-img')} src={data.thumbnailUrl} alt={data.name} />
            {/* info */}
            <div className={cx('info')}>
                {/* name */}
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                </h4>
                {/* price */}
                <span className={cx('price')}>{data.price}</span>
            </div>
        </Link>
    );
}
export default CardHorizontal;
