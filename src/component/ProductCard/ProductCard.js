import classNames from 'classnames/bind';

import styles from './ProductCard.module.scss';
import { StarFilled } from '@ant-design/icons/lib/icons';
import { EyeOutlined } from '@ant-design/icons/lib/icons';
import { HeartOutlined } from '@ant-design/icons/lib/icons';

const cx = classNames.bind(styles);

const imgsrc = require('~/public/uploads/products/CPU/Thumbnail/Product_Thumbnail_570x470_CPU-AMD-Ryzen-7-5800X-1.jpg');

function ProductCard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('product-img')}>
                    <div className={cx('img-product')}>
                        <img src={imgsrc} alt="" />
                    </div>
                    <div className={cx('product-label')}>
                        {/* <span className={cx('sale')}>-30%</span> */}
                        <span className={cx('new')}>NEW</span>
                    </div>
                    <div className={cx('action')}>
                        <div className={cx('wish-list')}>
                            <EyeOutlined className={cx('wish-icon')} />
                        </div>
                        <div className={cx('detail-list')}>
                            <HeartOutlined className={cx('detail-icon')} />
                        </div>
                    </div>

                    <div className={cx('product-chose')}>
                        <h3 className={cx('add-to-cart')}>Add To Cart</h3>
                    </div>
                </div>
                <div className={cx('product-body')}>
                    <div className={cx('product-band')}>
                        <span className={cx('band')}>ASUS</span>
                    </div>
                    <div className={cx('product-another ')}>
                        {/* <p className={) */}
                        <h3 className={cx('product-name')}>
                            <a href="#">Product Names</a>
                        </h3>
                        <h4 className={cx('product-price')}>
                            1.000.000đ <del className={cx('product-old-price')}>1.150.000đ</del>
                        </h4>
                        <div className={cx('product-rating')}>
                            <StarFilled className={cx('star-icon')} />
                            <StarFilled className={cx('star-icon')} />
                            <StarFilled className={cx('star-icon')} />
                            <StarFilled className={cx('star-icon')} />
                            <StarFilled className={cx('star-icon')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
