import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import { StarFilled } from '@ant-design/icons/lib/icons';
import { EyeOutlined } from '@ant-design/icons/lib/icons';
import { HeartOutlined } from '@ant-design/icons/lib/icons';

import formatCurrency from '~/helpers/currencyFormatter';
import { useCallback } from 'react';

const cx = classNames.bind(styles);

function ProductCard({ product, addToCart, toast = false }) {
    const navigate = useNavigate();
    const onClickItem = () => {
        if (!product) return;

        navigate(`/ProductDetail/${product.id}`);
        window.scrollTo(0, 0);
    };

    const handleAddToCart = useCallback(() => {
        addToCart(product);
        !!toast && toast();
    }, [addToCart, product, toast]);

    console.log();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('product-img')}>
                    <div className={cx('img-product')}>
                        <img src={product.images[0].images} alt={product.name} />
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

                    <div className={cx('product-chose')} onClick={handleAddToCart}>
                        <h3 className={cx('add-to-cart')}>{'Add to Cart'}</h3>
                    </div>
                </div>
                <div className={cx('product-body')} onClick={onClickItem}>
                    <div className={cx('product-band')}>
                        <span className={cx('band')}>ASUS</span>
                    </div>
                    <div className={cx('product-another ')}>
                        {/* <p className={) */}
                        <h3 className={cx('product-name')}>
                            <span>{product.name}</span>
                        </h3>
                        <h4 className={cx('product-price')}>
                            {formatCurrency(product.price)}
                            <del className={cx('product-old-price')}>{formatCurrency(product.old_price)}</del>
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
