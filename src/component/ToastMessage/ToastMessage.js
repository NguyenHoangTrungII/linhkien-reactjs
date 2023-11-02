import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ToastMessage.module.scss';

const cx = classNames.bind(styles);

const Toast = ({ title, message, type, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    const handleToastClose = () => {
        setIsVisible(false);
        onClose();
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={cx(`toast toast--${type}`)}>
            <div className={cx('toast__icon')}></div>
            <div className={cx('toast__body')}>
                <h3 className={cx('toast__title')}>{title}</h3>
                <p className={cx('toast__msg')}>{message}</p>
            </div>
            <div className={cx('toast__close')} onClick={handleToastClose}>
                <i className="fas fa-times"></i>
            </div>
        </div>
    );
};

export default Toast;
