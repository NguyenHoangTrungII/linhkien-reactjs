import classNames from 'classnames/bind';
import { GoogleOutlined } from '@ant-design/icons';

import styles from './SignUp.module.scss';
import InputText from '../Input/Input';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function SignUpComp() {
    return (
        <>
            <div className={cx('wrapper')}>
                {/* img */}
                <img src={require('~/public/uploads/login/login_img.png')} alt="anh" />

                {/* form login */}
                <div className={cx('signup-wrapper')}>
                    <div className={cx('signup-inner')}>
                        <h1 className={cx('signup-title')}>Create an account</h1>
                        <span className={cx('signup-subtitle')}>Enter your details below</span>

                        <div className={cx('signup-input')}>
                            <InputText lineunder className={cx('name')} placeholder={'Name'} />
                            <InputText lineunder className={cx('email')} placeholder={'Email or Phone Number'} />
                            <InputText type="password" lineunder className={cx('password')} placeholder={'Password'} />
                        </div>

                        <div className={cx('signup-footer')}>
                            <Button primary className={cx('btn-signup')}>
                                Log in
                            </Button>
                            <Button outline className={cx('btn-forgot')} Lefticon={<GoogleOutlined />}>
                                Forget Password?
                            </Button>
                            <span className={cx('remind-signup')}>
                                Already have account?
                                <Button text className={cx('signup-text')} to={'/login'}>
                                    Log in
                                </Button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpComp;
