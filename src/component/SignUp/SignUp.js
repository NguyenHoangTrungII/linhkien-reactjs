import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import InputText from '../Input/Input';
import Button from '../Button/Button';
import { GoogleCircleFilled, GoogleOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function SignUpComp() {
    return (
        // <div className="container-fluid	">
        <div className={cx('wrapper')}>
            {/* img */}
            <img src={require('~/public/uploads/login/login_img.png')} />

            {/* form login */}
            <div className={cx('login-wrapper')}>
                <div className={cx('login-inner')}>
                    <h1 className={cx('login-title')}>Create an account</h1>
                    <span className={cx('login-subtitle')}>Enter your details below</span>

                    <div className={cx('login-input')}>
                        <InputText lineunder className={cx('name')} placeholder={'Name'} />
                        <InputText lineunder className={cx('email')} placeholder={'Email or Phone Number'} />
                        <InputText lineunder className={cx('password')} placeholder={'Password'} />
                    </div>

                    <div className={cx('login-footer')}>
                        <Button primary className={cx('btn-login')}>
                            Log in
                        </Button>
                        <Button outline className={cx('btn-forgot')} Lefticon={<GoogleOutlined />}>
                            Forget Password?
                        </Button>
                        <span className={cx('remind-login')}>
                            Already have account?
                            <Button text className={cx('login-text')}>
                                Log in
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default SignUpComp;
