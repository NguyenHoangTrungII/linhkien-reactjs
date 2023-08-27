import classNames from 'classnames/bind';

import styles from './CartDetail.module.scss';
import Table from './Component/Table';

const cx = classNames.bind(styles);

function CartDetail() {
    const rowClass = cx('row', 'cart-container');
    const col1Class = cx('col-12', 'productdetail-wrapper');
    const col2Class = cx('col-xl-6', 'col-lg-6', 'col-md-6', 'detail-wrapper');
    const col3Class = cx('col-xl-6', 'col-lg-6', 'col-md-6', 'billing-wrapper');

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
    ];

    return (
        <div className={rowClass}>
            <div className={col1Class}>
                <Table columns={columns} data={data} />
            </div>
            <div className={col2Class}></div>
            <div className={col3Class}></div>
        </div>
    );
}

export default CartDetail;
