import React from 'react';
import classNames from 'classnames/bind';
// import { InputNumber } from 'ant';

import formatCurrency from '~/helpers/currencyFormatter';
import styles from './Table.module.scss';
import { InputNumber } from 'antd';

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
                    <tr key={index} className={cx('cart-row')}>
                        <td className={cx('product')}>
                            <img src={item.img} />
                            <p>{item.name}</p>
                        </td>
                        <td>
                            <span>{formatCurrency(item.price)}</span>
                        </td>
                        <td>
                            <InputNumber size={'middle'} className={cx('input-number')} min={0} defaultValue={1} />
                        </td>
                        <td>a</td>
                    </tr>
                ))}
            </tbody>
        </table>

        // <table>
        //     <tr>
        //         {columns.map((column, index) => (
        //             <th key={index} style={{ width: '25%' }}>
        //                 {column}
        //             </th>
        //         ))}
        //     </tr>
        //     {data.map((item, index) => (
        //         <tr key={index} className={cx('cart-row')}>
        //             <td className={cx('product')}>
        //                 <img src={item.img} />
        //                 <p>{item.name}</p>
        //             </td>
        //             <td>
        //                 <span>{formatCurrency(item.price)}</span>
        //             </td>
        //             <td>
        //                 <InputNumber size={'middle'} className={cx('input-number')} min={0} />
        //             </td>
        //             <td>a</td>
        //         </tr>
        //     ))}
        // </table>
    );
}

export default Table;
