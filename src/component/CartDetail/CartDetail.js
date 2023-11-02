import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './CartDetail.module.scss';
import Table from './Component/Table';
import Button from '../Button/Button';
import InputText from '../Input/Input';
import React, { useState } from 'react';

import formatCurrency from '~/helpers/currencyFormatter';
import { InputNumber } from 'antd';
import { Value } from 'sass';
import { calculateTotal } from '~/helpers/totalCaculate';

// import { Table } from 'antd';

const cx = classNames.bind(styles);

function CartDetail() {
    const store = useSelector((state) => ({
        cart: state.cart,
    }));

    const [qty, setQty] = useState(store.cart.map(() => 1));
    const history = useNavigate();

    const onClickItem = (id) => {
        history(`/ProductDetail/${id}`);
        console.log('clicked nè');
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn đến đầu trang khi component mount
    }, []);

    const handleUpdateQTY = (value, index) => {
        const newQty = [...qty];
        newQty[index] = value;
        setQty(newQty);
    };

    const totalSubTotal = (index, price) => {
        return formatCurrency(parseFloat(qty[index]) * parseFloat(price));
    };

    const columns = ['Product', 'Price', 'Quantity', 'Subtotal'];

    return (
        <div className={cx('row', 'cart-container')}>
            <div className={cx('col-12', 'productdetail-wrapper')}>
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {store.cart.length > 0 ? (
                            <>
                                {store.cart.map((item, index) => (
                                    <tr key={index} className={cx('cart-row')}>
                                        <td className={cx('product')} onClick={() => onClickItem(item._id)}>
                                            {}
                                            <img
                                                src={item.images.filter((image) => image.isThumbnail === true)[0].url}
                                                alt={item.name}
                                            />
                                            <p>{item.name}</p>
                                        </td>
                                        <td>
                                            <span>{formatCurrency(item.price)}</span>
                                        </td>
                                        <td>
                                            <InputNumber
                                                size={'middle'}
                                                className={cx('input-number')}
                                                min={0}
                                                defaultValue={qty[index]}
                                                onStep={(value) => handleUpdateQTY(value, index)}
                                                style={{ textAlign: 'center' }}
                                            />
                                        </td>
                                        <td>{totalSubTotal(index, item.price)}</td>
                                    </tr>
                                ))}
                            </>
                        ) : (
                            <div className={cx('cart-detail-empty')}>
                                <img src={require('~/public/uploads/cart/empty_cart.png')} />
                            </div>
                        )}
                    </tbody>
                </table>
            </div>
            <div className={cx('col-12', 'action-wrapper')}>
                <Button outline>Return To Shop</Button>
                <Button outline>Update Cart</Button>
            </div>
            <div className={cx('col-12', 'col-md-12', 'coupon-wrapper')}>
                <div className={cx('coupon-apply')}>
                    <InputText outline placeholder="Coupon Code" className={cx('coupon-input')} />
                    <Button primary className={cx('coupon-btn')}>
                        Apply Coupon
                    </Button>
                </div>

                <div className={cx('cart-total')}>
                    {/* total details */}
                    <div className={cx('cart-total-inner')}>
                        <span className={cx('title')}>Cart Total</span>
                        <div>
                            <div className={cx('payment')}>
                                <span className={cx('text')}>Subtotal:</span>
                                <span className={cx('price')}>
                                    {calculateTotal(store.cart.map((item) => item.price * item.quantity))}
                                </span>
                            </div>

                            <div className={cx('payment')}>
                                <span className={cx('text')}>Ship:</span>
                                <span className={cx('price')}>{200000}</span>
                            </div>

                            <div className={cx('payment')}>
                                <span className={cx('text')}>Total:</span>
                                <span className={cx('price')}>{200000}</span>
                            </div>
                        </div>

                        <div>
                            <Button primary>Procees to checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartDetail;
