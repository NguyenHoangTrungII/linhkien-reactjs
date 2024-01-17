import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardHorizontal.module.scss';
import Image from '~/component/image';
import formatCurrency from '~/helpers/currencyFormatter';

const cx = classNames.bind(styles);

function CardHorizontal({ data, isPrice = 'false' }) {
    console.log(data);
    return (
        <Link to={`/ProductDetail/${data.product.id}`} className={cx('wrapper')}>
            {/* image */}
            <Image className={cx('product-img')} src={data.product.images[0].images} alt={data.name} />
            {/* info */}
            <div className={cx('info')}>
                {/* name */}
                <h4 className={cx('name')}>
                    <span>{data.product.name}</span>
                </h4>
                {/* price */}
                {isPrice && <span className={cx('price')}>{formatCurrency(data.product.price)}</span>}
            </div>
        </Link>
    );
}
export default CardHorizontal;
