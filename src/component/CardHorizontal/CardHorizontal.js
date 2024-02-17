import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardHorizontal.module.scss';
import Image from '~/component/image';
import formatCurrency from '~/helpers/currencyFormatter';

const cx = classNames.bind(styles);

function CardHorizontal({ data, isPrice = 'false' }) {
    console.log(data);

    return (
        <Link to={`/ProductDetail/${data.id}`} className={cx('wrapper')}>
            {/* image */}
            <Image className={cx('product-img')} src={data.images[0].images} alt={data.name} />;
            <div className={cx('info')}>
                {/* name */}
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                </h4>
                {/* price */}
                {isPrice && <span className={cx('price')}>{formatCurrency(data.price)}</span>}
            </div>
        </Link>
    );
}
export default CardHorizontal;
