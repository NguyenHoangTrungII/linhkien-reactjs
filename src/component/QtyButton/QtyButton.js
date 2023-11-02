import React, { useState, useRef, useEffect } from 'react';
import styles from './QtyButton.module.scss';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function QtyButton({ className, inputStyle = '', onAddqty, onMinsqty, product }) {
    const [qty, setqty] = useState(1);
    const dispatch = useDispatch();

    const handleAddQty = () => {
        setqty(qty + 1);
        dispatch(onAddqty(product._id));
    };

    const handleMinsQty = () => {
        if (qty >= 2) {
            setqty(qty - 1);
            dispatch(onMinsqty(product._id));
        }
    };

    return (
        <div className={cx('wrapper', className)}>
            <button type="button" className={cx('addQty-button')} onClick={() => handleAddQty()}>
                <PlusOutlined className={cx('icon-addQTY')} />
            </button>
            <input
                type="number"
                className={cx('input', inputStyle)}
                value={qty}
                onChange={() => {
                    console.log('change');
                }}
            />
            <button type="button" className={cx('MinsQty-button')} onClick={() => handleMinsQty()}>
                <MinusOutlined className={cx('icon-minusQTY')} />
            </button>
        </div>
    );
}

export default QtyButton;
