import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BillingDetails.module.scss';
import InputText from '~/component/Input/Input';
import CheckBoxInput from '~/component/CheckBoxInput/CheckBoxInput';

const cx = classNames.bind(styles);

function BillingDetails({ className, onUpdateBillingData }) {
    // State cho tất cả giá trị của input
    const [formData, setFormData] = useState({
        companyName: '',
        streetAddress: '',
        optionalAddress: '',
        townCity: '',
        phoneNumber: '',
    });

    // Hàm cập nhật giá trị của input
    const handleInputChange = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    // Hàm kết hợp các giá trị thành một trường address
    const createNewFormData = () => {
        const { companyName, streetAddress, optionalAddress, townCity, phoneNumber } = formData;
        var newForm = {
            address: `${companyName}, ${streetAddress}, ${optionalAddress}, ${townCity}`,
            phone: phoneNumber,
        };

        return newForm;
    };

    const handleNextButtonClick = () => {
        onUpdateBillingData(createNewFormData());
    };

    return (
        <div className={cx('billingdetails', className)}>
            <h1 className={cx('title')}>Billing Details</h1>

            <span className={cx('input-title')}>Company Name</span>
            <InputText
                className={cx('input-text')}
                primary
                value={formData.companyName}
                setValue={(e) => handleInputChange('companyName', e.target.value)}
            />

            <span className={cx('input-title')}>Street Address</span>
            <InputText
                className={cx('input-text')}
                primary
                value={formData.streetAddress}
                setValue={(e) => handleInputChange('streetAddress', e.target.value)}
            />

            <span className={cx('input-title')}>Apartment, floor, etc. (optional)</span>
            <InputText
                className={cx('input-text')}
                primary
                value={formData.optionalAddress}
                setValue={(e) => handleInputChange('optionalAddress', e.target.value)}
            />

            <span className={cx('input-title')}>Town/City*</span>
            <InputText
                className={cx('input-text')}
                primary
                value={formData.townCity}
                setValue={(e) => handleInputChange('townCity', e.target.value)}
            />

            <span className={cx('input-title')}>Phone Number*</span>
            <InputText
                className={cx('input-text')}
                primary
                value={formData.phoneNumber}
                setValue={(e) => handleInputChange('phoneNumber', e.target.value)}
            />

            <CheckBoxInput
                text="Save this information for faster check-out next time"
                className={cx('checkboxtext')}
                onChange={handleNextButtonClick}
            />
        </div>
    );
}

export default BillingDetails;
