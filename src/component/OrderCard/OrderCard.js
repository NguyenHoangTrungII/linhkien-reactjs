import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Edit, Label, Save } from '@mui/icons-material';
import { useState } from 'react';
import styles from './OrderCard.module.scss';
import CardHorizontal from '../CardHorizontal';
import Button from '../Button';

const cx = classNames.bind(styles);

function OrderCard({ children, data }) {
    const [isEditing, setIsEditing] = useState(false);
    const [address, setAddress] = useState(data.address);
    const [originalAddress, setOriginalAddress] = useState(data.address);
    const [statusOrder, setStatusOrder] = useState(data.status);

    const handleChangeStatusName = (status) => {
        switch (status) {
            case '1':
                return 'Waiting';
            case '2':
                return 'Checked';
            default:
                return 'Error';
        }
    };

    const handleToggleEdit = () => {
        if (isEditing) {
            setAddress(originalAddress);
        }
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setOriginalAddress(address);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setAddress(originalAddress);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-card')}>
                    <div className={cx('status')}>
                        <label>{handleChangeStatusName(data.status)}</label>
                    </div>
                </div>
                <div className={cx('body-card')}>
                    <div className={cx('body-inner')}>
                        <div>
                            {data.orderDetails.slice(0, 2).map((orderDetail, index) => {
                                return <CardHorizontal key={orderDetail.id} data={orderDetail} />;
                            })}

                            {data.orderDetails.length >= 3 && <div>see all</div>}
                        </div>
                    </div>
                </div>
                <div className={cx('footer-card')}>
                    <div className={cx('footer-inner')}>
                        <div className={cx('summary')}>
                            <div className={cx('label-text')}>
                                <label>Total: </label>
                                <label>{data.total}</label>
                            </div>
                            <div className={cx('label-text')}>
                                <label>Address: </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={handleInputChange}
                                        className={cx('input-address')}
                                    />
                                ) : (
                                    <label>{address}</label>
                                )}
                                {statusOrder === '1' && (
                                    <label
                                        className={cx('icon-edit')}
                                        onClick={isEditing ? handleSave : handleToggleEdit}
                                    >
                                        {isEditing ? <Save /> : <Edit />}
                                    </label>
                                )}
                            </div>
                        </div>
                        <div className={cx('footer-button')}>
                            {statusOrder === '1' && isEditing && (
                                <Button outline className={cx('coupon-btn')} onClick={handleCancel}>
                                    Cancel
                                </Button>
                            )}
                            {statusOrder === '1' && <Button className={cx('coupon-btn')}>Cancel</Button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OrderCard;
