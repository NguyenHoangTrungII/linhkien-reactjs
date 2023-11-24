import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './CartDetail.module.scss';
import Table from './Component/Table';
import Button from '../Button/Button';
import InputText from '../Input/Input';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import formatCurrency from '~/helpers/currencyFormatter';
import { InputNumber } from 'antd';
import { Value } from 'sass';
import { calculateTotal } from '~/helpers/totalCaculate';
import useCart from '~/hooks/useCart';
import { addQtyItem, fetchCart, minusQtyItem, updateQuantity } from '~/redux/actions/cartAction';
import QtyButton from '../QtyButton/QtyButton';
import OverlayLoading from '../OverlayLoading/OverlayLoading';

// import { Table } from 'antd';

const cx = classNames.bind(styles);

function CartDetail({ cart }) {
    const history = useNavigate();

    const onClickItem = (id) => {
        history(`/ProductDetail/${id}`);
    };

    const totalSubTotal = (qty, price) => {
        return formatCurrency(parseFloat(qty) * parseFloat(price));
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
                        {cart.cartItems.length > 0 ? (
                            <>
                                {cart.cartItems.map((item, index) => (
                                    <tr key={index} className={cx('cart-row')}>
                                        <td className={cx('product')} onClick={() => onClickItem(item._id)}>
                                            {}
                                            <img
                                                src={
                                                    item.productId.images.filter(
                                                        (image) => image.isThumbnail === true,
                                                    )[0].url
                                                }
                                                alt={item.name}
                                            />
                                            <p>{item.name}</p>
                                        </td>
                                        <td>
                                            <span>{formatCurrency(item.price)}</span>
                                        </td>
                                        <td>
                                            {/* <InputNumber
                                                size={'middle'}
                                                className={cx('input-number')}
                                                min={0}
                                                defaultValue={qty[index]}
                                                onStep={(value) => handleUpdateQTY(value, index)}
                                                style={{ textAlign: 'center' }}
                                            /> */}

                                            <QtyButton
                                                className={cx('qty-button-cart')}
                                                inputStyle={cx('qty-button-cart')}
                                                product={item}
                                                updateQuantity={updateQuantity}
                                                // onMinsqty={updateQuantity}
                                            />
                                        </td>
                                        <td>{totalSubTotal(item.quantity, item.price)}</td>
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
                                    {formatCurrency(
                                        cart.cartItems.length > 0 &&
                                            calculateTotal(
                                                cart.cartItems.map(
                                                    (item) => parseInt(item.price) * parseInt(item.quantity),
                                                ),
                                            ),
                                    )}
                                </span>
                            </div>

                            <div className={cx('payment')}>
                                <span className={cx('text')}>Ship:</span>
                                <span className={cx('price')}>{formatCurrency(200000)}</span>
                            </div>

                            <div className={cx('payment')}>
                                <span className={cx('text')}>Total:</span>
                                <span className={cx('price')}>
                                    {formatCurrency(
                                        parseFloat(
                                            cart.cartItems.length > 0 &&
                                                calculateTotal(
                                                    cart.cartItems.map((item) => item.price * item.quantity),
                                                ),
                                        ) + +200000,
                                    )}
                                </span>
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
