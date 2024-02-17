import classNames from 'classnames/bind';
import styles from './FormCustomer.module.scss';

const cx = classNames.bind(styles);

function FormCustomer({ children, label, className }) {
    return (
        <div className={cx('wrapper')}>
            {label && <label className={cx('label')}>{label}</label>}
            <div className={cx('inner')}>{children}</div>
        </div>
    );
}

export default FormCustomer;
