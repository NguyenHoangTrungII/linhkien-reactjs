import React, { useState, useRef, useEffect } from 'react';
import styles from './QtyButton.module.scss';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MinusOutlined, PlusOutlined, StarOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function QtyButton({ className }) {
    const [qty, setqty] = useState(1);

    const handleAddQty = () => {
        setqty(qty + 1);
    };

    const handleMinsQty = () => {
        if (qty >= 2) {
            setqty(qty - 1);
        }
    };

    return (
        <div className={cx('wrapper', className)}>
            <button type="button" className={cx('addQty-button')} onClick={() => handleAddQty()}>
                <PlusOutlined className={cx('icon-addQTY')} />
            </button>
            <input type="number" className={cx('input')} value={qty} />
            <button type="button" className={cx('MinsQty-button')} onClick={() => handleMinsQty()}>
                <MinusOutlined className={cx('icon-minusQTY')} />
            </button>
        </div>
    );
}

export default QtyButton;
