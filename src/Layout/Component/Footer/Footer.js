import classNames from 'classnames/bind';
import {
    FacebookOutlined,
    InstagramOutlined,
    LinkOutlined,
    LinkedinOutlined,
    SendOutlined,
    TwitterOutlined,
} from '@ant-design/icons/lib/icons';

import styles from './Footer.module.scss';

import Button from '~/component/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        // <footer className={cx('wrapper')}>
        //     <div className="container">
        //         <div className="row">
        //             {/* <div className="col-5"> */}
        //             <div className="col-md-3">
        //                 <h1 className={cx('tittle')}>Exclusive</h1>

        //                 <h3>Subscribe</h3>
        //                 <h5>Get 10% off your first order</h5>
        //                 <Button
        //                     outline
        //                     className={cx('btn-send-mail')}
        //                     Righticon={<SendOutlined className={cx('icon-send-mail')} />}
        //                 >
        //                     enter your email
        //                 </Button>
        //             </div>

        //             <div className="col-md-3">
        //                 <h2 className={cx('tittle')}>Support</h2>

        //                 <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        //                 <h5>exclusive@gmail.com</h5>
        //                 <h5>+88015-88888-9999</h5>
        //             </div>

        //             <div className="col-md-3">
        //                 <h2 className={cx('tittle')}>Account</h2>

        //                 <h5>My Account</h5>
        //                 <h5>Login / Register</h5>
        //                 <h5>Cart</h5>
        //                 <h5>Wishlist</h5>
        //                 <h5>Shop</h5>
        //             </div>

        //             <div className="col-md-3">
        //                 <h2 className={cx('tittle')}>Quick Link</h2>

        //                 <h5>Privacy Policy</h5>
        //                 <h5>Terms Of Use</h5>
        //                 <h5>FAQ</h5>
        //                 <h5>Contact</h5>
        //             </div>

        //             <div className="col-md-3">
        //                 <h2 className={cx('tittle')}>Download App</h2>

        //                 <h6>Save $3 with App New User Only</h6>
        //                 <div className={cx('get-it-on')}>
        //                     <img src={require('~/public/uploads/footer/Qrcode.png')} />
        //                     <div className={cx('place-dowload')}>
        //                         <Link>
        //                             <img src={require('~/public/uploads/footer/googleplay.png')} />
        //                         </Link>
        //                         <Link>
        //                             <img src={require('~/public/uploads/footer/appstore.png')} />
        //                         </Link>
        //                     </div>
        //                 </div>

        //                 <div className={cx('social')}>
        //                     <FacebookOutlined className={cx('icon-social')} />
        //                     <TwitterOutlined className={cx('icon-social')} />
        //                     <InstagramOutlined className={cx('icon-social')} />
        //                     <LinkedinOutlined className={cx('icon-social')} />
        //                 </div>
        //             </div>
        //             {/* </div> */}
        //         </div>
        //     </div>
        // </footer>

        <footer className={cx('wrapper')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <h1 className={cx('tittle')}>Exclusive</h1>
                            <h3>Subscribe</h3>
                            <h5>Get 10% off your first order</h5>
                            <Button
                                outline
                                className={cx('btn-send-mail')}
                                Righticon={<SendOutlined className={cx('icon-send-mail')} />}
                            >
                                enter your email
                            </Button>
                        </div>

                        <div className="col-md-2 col-sm-6 mb-4 mr-2">
                            <h2 className={cx('tittle')}>Support</h2>
                            <h5>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h5>
                            <h5>exclusive@gmail.com</h5>
                            <h5>+88015-88888-9999</h5>
                        </div>

                        <div className="col-md-2 col-sm-3 mb-5">
                            <h2 className={cx('tittle')}>Account</h2>
                            <h5>My Account</h5>
                            <h5>Login / Register</h5>
                            <h5>Cart</h5>
                            <h5>Wishlist</h5>
                            <h5>Shop</h5>
                        </div>

                        <div className="col-md-2 col-sm-3 mb-5">
                            <h2 className={cx('tittle')}>Quick Link</h2>
                            <h5>Privacy Policy</h5>
                            <h5>Terms Of Use</h5>
                            <h5>FAQ</h5>
                            <h5>Contact</h5>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-2">
                            <h2 className={cx('tittle')}>Download App</h2>
                            <h6>Save $3 with App New User Only</h6>
                            <div className={cx('get-it-on')}>
                                <img src={require('~/public/uploads/footer/Qrcode.png')} alt="QR Code" />
                                <div className={cx('place-dowload')}>
                                    <Link>
                                        <img
                                            src={require('~/public/uploads/footer/googleplay.png')}
                                            alt="Google Play"
                                        />
                                    </Link>
                                    <Link>
                                        <img src={require('~/public/uploads/footer/appstore.png')} alt="App Store" />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('social')}>
                                <FacebookOutlined className={cx('icon-social')} />
                                <TwitterOutlined className={cx('icon-social')} />
                                <InstagramOutlined className={cx('icon-social')} />
                                <LinkedinOutlined className={cx('icon-social')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
