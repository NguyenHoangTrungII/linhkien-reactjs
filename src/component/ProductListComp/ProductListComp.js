import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './ProductListComp.module.scss';
import { Checkbox, Radio } from 'antd';

const cx = classNames.bind(styles);

function ProductListComp() {
    return (
        <div className={cx('row', 'cart-container')}>
            <div className={cx('col-3', 'action-wrapper')}>
                <div className={cx('filter-by-brand')}>
                    <h3 className={cx('title-brand')}>Thương hiệu</h3>
                    <div className={cx('name-brands')}>
                        <Checkbox className={cx('name-brand')}></Checkbox>
                    </div>
                </div>
            </div>
            <div className={cx('col-9', 'action-wrapper')}></div>
        </div>
    );
}

export default ProductListComp;
