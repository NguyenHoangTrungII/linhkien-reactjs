import React, { useState } from 'react';
import classNames from 'classnames/bind';
// import { InputNumber } from 'ant';

import formatCurrency from '~/helpers/currencyFormatter';
import styles from './Table.module.scss';
import { InputNumber } from 'antd';
import { Value } from 'sass';

const cx = classNames.bind(styles);

function Table(props) {
    const { columns, data } = props;

    const [qty, setQty] = useState(data.map(() => 1));

    const handleUpdateQTY = (value, index) => {
        const newQty = [...qty];
        newQty[index] = value;
        setQty(newQty);
    };

    return (
        <table className={cx('table')}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    <>
                        {data.map((item, index) => (
                            <tr key={index} className={cx('cart-row')}>
                                <td className={cx('product')}>
                                    {}
                                    <img src={item.images.filter((image) => image.isThumbnail === true)[0].url} />
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
                                <td>{formatCurrency(parseFloat(qty[index]) * parseFloat(item.price))}</td>
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
    );
}

export default Table;
