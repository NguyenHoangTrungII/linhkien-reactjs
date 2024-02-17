import OrderCard from '~/component/OrderCard/OrderCard';
import PaginationCustomer from '~/component/PaginationCustomer/PaginationCustomer';

import classNames from 'classnames/bind';
import styles from './OrderTap.module.scss';

const cx = classNames.bind(styles);

function OrderTap({ data }) {
    return (
        <div>
            <div>
                {data.map((item, index) => {
                    return <OrderCard data={item} />;
                })}
            </div>
            <div className={cx('footer-tab')}>
                <PaginationCustomer />
            </div>
        </div>
    );
}

export default OrderTap;
