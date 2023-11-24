import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ProductListComp.module.scss';
import { Checkbox, Radio, Form, Slider } from 'antd';
import CheckBoxInput from '../CheckBoxInput';
import Separator from '../Separator';
import formatCurrency from '~/helpers/currencyFormatter';
import { colors } from '@mui/material';

import useCart from '~/hooks/useCart';
import ProductSlider from '../Slider';
import Button from '../Button';

const cx = classNames.bind(styles);

function ProductListComp({ products = [], brand }) {
    const { addToCart, isItemOnCart } = useCart();

    const [value, setValue] = useState(1000000);

    return (
        <div className={cx('row', 'productlist-container')}>
            <div className={cx('col-3', 'action-wrapper')}>
                <div className={cx('filter-by-brand')}>
                    <h3 className={cx('title-brand')}>Brand</h3>
                    <Separator className={cx('filter-separator')} />

                    <div className={cx('name-brands')}>
                        {brand.map((item, index) => {
                            return <CheckBoxInput text={item.name} to={item._id} />;
                        })}
                        {/* <CheckBoxInput text="Intel" />
                        <CheckBoxInput text="Kingston" />
                        <CheckBoxInput text="Corsair" />
                        <CheckBoxInput text="AMD" /> */}
                    </div>
                </div>
                <div className={cx('filter-by-price')}>
                    <div className={cx('inner-filter')}>
                        <h3 className={cx('title-brand')}>Price</h3>
                        <Separator className={cx('filter-separator')} />
                        <Slider
                            range
                            step={1}
                            min={0}
                            defaultValue={[500000, 10000000]}
                            max={100000000}
                            tipFormatter={formatCurrency}
                            className={cx('slider-price')}
                            trackStyle={[{ backgroundColor: '#DB4444' }, { backgroundColor: '#DB4444' }]}
                            handleStyle={{ borderColor: '#DB4444' }}
                            dotStyle={{ borderColor: '#DB4444', backgroundColor: '#DB4444' }}
                        />
                    </div>
                </div>
                <Button outline large className={cx('applyfilter-btn')}>
                    Apply
                </Button>
            </div>
            <div className={cx('col-9', 'action-wrapper')}>
                <ProductSlider
                    arrowVisible={false}
                    rowNumber={products.length / 3 < 1 ? 1 : Math.ceil(products.length / 3)}
                    slidesToShow={products.length < 4 ? products.length : 3}
                    products={products}
                    addToCart={addToCart}
                />
            </div>
        </div>
    );
}

export default ProductListComp;
