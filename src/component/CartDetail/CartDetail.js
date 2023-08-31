import classNames from 'classnames/bind';

import styles from './CartDetail.module.scss';
import Table from './Component/Table';
import Button from '../Button/Button';
import InputText from '../Input/Input';

// import { Table } from 'antd';

const cx = classNames.bind(styles);

function CartDetail() {
    const rowClass = cx('row', 'cart-container');
    const col1Class = cx('col-12', 'productdetail-wrapper');
    const col2Class = cx('col-12', 'action-wrapper');
    const col3Class = cx('col-12', 'col-md-12', 'coupon-wrapper');

    const columns = ['Product', 'Price', 'Quantity', 'Subtotal'];
    const data = [
        {
            _id: 1,
            img: require('~/public/uploads/products/CPU/Thumbnail/Product_Thumbnail_570x470_cpu-intel-core-i9-12900 (1).png'),
            price: '60000',
            name: 'CPU intel core i9 12900',
        },

        {
            _id: 2,
            img: require('~/public/uploads/products/CPU/Thumbnail/Product_Thumbnail_570x470_cpu-intel-core-i9-12900 (1).png'),
            price: '60000',
            name: 'CPU intel core i9 12900',
        },
        {
            _id: 3,
            img: require('~/public/uploads/products/CPU/Thumbnail/Product_Thumbnail_570x470_cpu-intel-core-i9-12900 (1).png'),
            price: '60000',
            name: 'CPU intel core i9 12900',
        },

        {
            _id: 4,
            img: require('~/public/uploads/products/CPU/Thumbnail/Product_Thumbnail_570x470_cpu-intel-core-i9-12900 (1).png'),
            price: '60000',
            name: 'CPU intel core i9 12900',
        },

        // {
        //     _id: 5,
        //     img: require('~/public/uploads/products/CPU/Thumbnail/Product_Thumbnail_570x470_cpu-intel-core-i9-12900 (1).png'),
        //     price: '60000',
        //     name: 'CPU intel core i9 12900',
        // },
    ];

    return (
        <div className={rowClass}>
            <div className={col1Class}>
                <Table columns={columns} data={data} />
            </div>
            <div className={col2Class}>
                <Button outline>Return To Shop</Button>
                <Button outline>Update Cart</Button>
            </div>
            <div className={col3Class}>
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
                                <span className={cx('price')}>{200000}</span>
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
