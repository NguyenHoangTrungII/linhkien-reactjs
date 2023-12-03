import React, { useState, useRef, useEffect } from 'react';
import styles from './QtyButton.module.scss';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function QtyButton({ className, inputStyle = '', updateQuantity, product, isQuantity = false }) {
    const [qty, setqty] = useState(isQuantity ? 1 : product.quantity);
    const dispatch = useDispatch();

    const handleAddQty = () => {
        const updatedQty = qty + 1;

        if (!isQuantity) {
            setqty((prevQty) => prevQty + 1);
            dispatch(updateQuantity(product._id, updatedQty, qty));
        } else {
            setqty((prevQty) => prevQty + 1);
        }
    };

    const handleMinsQty = () => {
        if (qty >= 2) {
            if (!isQuantity) {
                setqty(qty - 1);
                dispatch(updateQuantity(product._id, qty, qty - 1));
            } else {
                setqty(qty - 1);
            }
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
