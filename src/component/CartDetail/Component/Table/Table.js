import React from 'react';
import classNames from 'classnames/bind';

import formatCurrency from '~/helpers/currencyFormatter';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

function Table(props) {
    const { columns, data } = props;

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
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className={cx('product')}>
                            <img src={item.img} />
                            <p>{item.name}</p>
                        </td>
                        <td>
                            <span>{formatCurrency(item.price)}</span>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
