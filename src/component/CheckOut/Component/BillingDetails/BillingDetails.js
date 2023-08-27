import classNames from 'classnames/bind';
import styles from './BillingDetails.module.scss';
import InputText from '~/component/Input/Input';
import CheckBoxInput from '~/component/CheckBoxInput/CheckBoxInput';

const cx = classNames.bind(styles);

function BillingDetails({ className }) {
    return (
        <div className={cx('billingdetails', className)}>
            <h1 className={cx('title')}>Billing Details</h1>
            <span className={cx('input-title')}>First Name*</span>
            <InputText className={cx('input-text')} primary />
            <span className={cx('input-title')}>Company Name</span>
            <InputText className={cx('input-text')} primary />
            <span className={cx('input-title')}>Street Address</span>
            <InputText className={cx('input-text')} primary />
            <span className={cx('input-title')}>Apartment, floor, etc. (optional)</span>
            <InputText className={cx('input-text')} primary />
            <span className={cx('input-title')}>Town/City*</span>
            <InputText className={cx('input-text')} primary />
            <span className={cx('input-title')}>Phone Number*</span>
            <InputText className={cx('input-text')} primary />
            <span className={cx('input-title')}>Email Address*</span>
            <InputText className={cx('input-text')} primary />
            <CheckBoxInput text="Save this information for faster check-out next time" className={cx('checkboxtext')} />
        </div>
    );
}

export default BillingDetails;
