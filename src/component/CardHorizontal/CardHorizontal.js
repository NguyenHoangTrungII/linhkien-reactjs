import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardHorizontal.module.scss';
import Image from '~/component/image';
import formatCurrency from '~/helpers/currencyFormatter';

const cx = classNames.bind(styles);

function CardHorizontal({ data, isPrice = 'false' }) {
    // const image = data.images.filter((image) => image.isThumbnail === true);

    // console.log('aaaaa', data.productId.name);
    return (
        <Link to={`/ProductDetail/:${data._id}`} className={cx('wrapper')}>
            {/* image */}
            <Image className={cx('product-img')} src={data.thumbnailUrl} alt={data.name} />
            {/* info */}
            <div className={cx('info')}>
                {/* name */}
                <h4 className={cx('name')}>
                    <span>{}</span>
                </h4>
                {/* price */}
                {isPrice && <span className={cx('price')}>{formatCurrency(data.price)}</span>}
            </div>
        </Link>
    );
}
export default CardHorizontal;
