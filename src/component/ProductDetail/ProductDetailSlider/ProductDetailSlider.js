import React, { useState } from 'react';
import styles from './ProductDetailSlider.module.scss';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeartOutlined, StarOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import QtyButton from '~/component/QtyButton/QtyButton';
import Button from '~/component/Button';
import formatCurrency from '~/helpers/currencyFormatter';
import Separator from '~/component/Separator';
import Rating from '@mui/material/Rating';

const cx = classNames.bind(styles);

const ProductDetailSlider = () => {
    const [indexThumbnail, setIndexThumbnail] = useState(0);
    const productdetail = useSelector((state) => state.store.productsbyID);
    const [value, setValue] = useState(2);

    const handleOnClickImg = (index) => {
        setIndexThumbnail(index);
    };

    const handleChangeRating = (event, newValue) => {
        setValue(newValue);
    };

    console.log(productdetail);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col-2')}>
                    <div className={cx('gallery')}>
                        {productdetail[0].images.length > 4
                            ? productdetail[0].images.slice(0, 4).map((item, index) => {
                                  return (
                                      <div
                                          className={cx('gallery-imgs')}
                                          key={index}
                                          onClick={() => handleOnClickImg(index)}
                                      >
                                          <img className={cx('gallery-img')} src={item.url} alt="abc" />
                                      </div>
                                  );
                              })
                            : productdetail[0].images.map((item, index) => {
                                  return (
                                      <div
                                          className={cx('gallery-imgs')}
                                          key={index}
                                          onClick={() => handleOnClickImg(index)}
                                      >
                                          <img className={cx('gallery-img')} src={item.images} alt="abc" />
                                      </div>
                                  );
                              })}
                    </div>
                </div>
                <div className={cx('col-5')}>
                    <div className={cx('thumbnail')}>
                        <img
                            className={cx('thumbnail-img')}
                            src={productdetail[0].images[indexThumbnail].images}
                            alt={productdetail.name}
                        />
                    </div>
                </div>
                <div className={cx('col-5', 'content-wrapper')}>
                    <div className={cx('content-inner')}>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-name')}>{productdetail[0].name} </h3>
                            <div className={cx('rating')}>
                                <div className={cx('star')}>
                                    <Rating
                                        className={cx('custom-star')}
                                        name="simple-controlled"
                                        value={value}
                                        onChange={handleChangeRating}
                                    />
                                </div>
                                <span>{'(150 review)'}</span>
                                <div className={cx('line')} />
                                <span className={cx('status')}>In stock</span>
                            </div>
                            <span className={cx('product-price')}>{formatCurrency(productdetail[0].price)}</span>
                            <p className={cx('product-des')}>{productdetail[0].description}</p>
                        </div>

                        {/* Separator */}
                        <Separator className={cx('separator')} />

                        {/* share */}
                        <div className={cx('share-with')}>
                            <h3>Share</h3>
                        </div>
                        {/* action */}
                        <div className={cx('action')}>
                            {/* qty button */}
                            <QtyButton className={cx('qty-button')} isQuantity={true} product />
                            {/* //     Buy Now */}
                            <Button primary className={cx('btn-buy-now')}>
                                Buy now
                            </Button>
                            {/* add wish list button */}

                            <div className={cx('add-to-wish')}>
                                <HeartOutlined className={cx('icon-heart')} />
                            </div>
                        </div>
                        {/* info  */}
                        <div className={cx('support-infos')}>
                            <div className={cx('support-info-detail')}>
                                {/* icon */}
                                <img src={require('~/public/uploads/icons/icon-delivery.png')} alt="anh" />
                                {/* content */}
                                <div className={cx('content')}>
                                    {/* title */}
                                    <h2>Free Delivery</h2>
                                    {/* detail */}
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>

                            <div className={cx('support-info-detail')}>
                                {/* icon */}
                                <img src={require('~/public/uploads/icons/Icon-return.png')} alt="anh" />
                                {/* content */}
                                <div className={cx('content')}>
                                    {/* title */}
                                    <h2>Return Delivery</h2>
                                    {/* detail */}
                                    <p>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSlider;
