import classNames from 'classnames/bind';

import styles from './CheckOutComp.module.scss';
import BillingDetails from './Component/BillingDetails/BillingDetails';
import CartCheckOut from './Component/CartCheckOut/CartCheckOut';

const cx = classNames.bind(styles);

function CheckOutComp({ cart }) {
    const rowClass = cx('row', 'checkout-container');
    const col1Class = cx('col-xl-6', 'col-lg-6', 'col-md-6', 'billing-wrapper');
    const col2Class = cx('col-xl-6', 'col-lg-6', 'col-md-6', 'detail-wrapper');

    return (
        <div className={rowClass}>
            <div className={col1Class}>
                <BillingDetails className={cx('billing')} />
            </div>
            {/* <CheckOutComp /> */}
            <div className={col2Class}>
                <CartCheckOut className={cx('detail')} cart={cart} />
            </div>
        </div>
    );
}

export default CheckOutComp;
