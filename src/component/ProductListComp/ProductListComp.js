import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './ProductListComp.module.scss';
import { Checkbox, Radio, Form } from 'antd';
import CheckBoxInput from '../CheckBoxInput';
import Separator from '../Separator';

const cx = classNames.bind(styles);

function ProductListComp() {
    return (
        <div className={cx('row', 'productlist-container')}>
            <div className={cx('col-3', 'action-wrapper')}>
                <div className={cx('filter-by-brand')}>
                    <h3 className={cx('title-brand')}>Brand</h3>
                    <Separator className={cx('filter-brand-separator')} />
                    <div className={cx('name-brands')}>
                        <CheckBoxInput text="Intel" />
                        <CheckBoxInput text="Kingston" />
                        <CheckBoxInput text="Corsair" />
                        <CheckBoxInput text="AMD" />
                    </div>
                </div>

                <div className={cx('filter-by-price')}>
                    <div className={cx('inner-filter')}>
                        <h3 className={cx('title-brand')}>Price</h3>
                        <Separator className={cx('filter-brand-separator')} />
                    </div>
                </div>
            </div>
            <div className={cx('col-9', 'action-wrapper')}></div>
        </div>
    );
}

export default ProductListComp;
