import classNames from 'classnames/bind';

import styles from './ContactComp.module.scss';

import { PhoneOutlined } from '@ant-design/icons';
import InputText from '../Input/Input';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function ContactComp() {
    const rowClass = cx('row', 'contact-container');
    const col1Class = cx('col-xl-6', 'col-lg-6', 'col-md-6', 'info-wrapper');
    const col2Class = cx('col-xl-6', 'col-lg-6', 'col-md-6', 'feedback-wrapper');

    return (
        <div className={rowClass}>
            <div className={col1Class}>
                <div className={cx('info')}>
                    <div className={cx('info-card')}>
                        <div className={cx('icon-text')}>
                            <PhoneOutlined className={cx('icon')} />
                            <span className={cx('content')}>Call to Us</span>
                        </div>
                        <div className={cx('text')}>
                            <p>We are available 24/7, 7 days a week.</p>
                            <p>Phone: +8801611112222</p>
                        </div>
                    </div>

                    <div className={cx('info-card')}>
                        <div className={cx('icon-text')}>
                            <PhoneOutlined className={cx('icon')} />
                            <span className={cx('content')}>Call to Us</span>
                        </div>
                        <div className={cx('text')}>
                            <p>Fill out our form and we will contact you within 24 hours.</p>
                            <p>Emails: customer@exclusive.com</p>
                            <p>Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <CheckOutComp /> */}
            <div className={col2Class}>
                <div className={cx('form')}>
                    <div className={cx('form-inner')}>
                        <div className={cx('first-input')}>
                            <InputText primary placeholder="Your Name *" />
                            <InputText primary placeholder="Your Email *" />
                            <InputText primary placeholder="Your Phone *" />
                        </div>
                        {/* <InputText primary className={cx('input-text')} placeholder="Your Massage" />
                         */}

                        <textarea rows="10" cols="50" placeholder="Your Massage" className={cx('text-area')} />

                        <div className={cx('btn')}>
                            <Button primary className={cx('btn-send')}>
                                Send Massage
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactComp;
