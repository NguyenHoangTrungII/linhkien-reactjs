import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
import InputText from '../Input/Input';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function LogInComp() {
    return (
        // <div className="container-fluid	">
        <div className={cx('wrapper')}>
            {/* img */}
            <img src={require('~/public/uploads/login/login_img.png')} />

            {/* form login */}
            <div className={cx('login-wrapper')}>
                <div className={cx('login-inner')}>
                    <h1 className={cx('login-title')}>Log in to Exclusive</h1>
                    <span className={cx('login-subtitle')}>Enter your details below</span>

                    <div className={cx('login-input')}>
                        <InputText lineunder className={cx('email')} placeholder={'Email or Phone Number'} />
                        <InputText lineunder className={cx('password')} placeholder={'Password'} />
                    </div>

                    <div className={cx('login-footer')}>
                        <Button primary className={cx('btn-login')}>
                            Log in
                        </Button>
                        <Button text className={cx('btn-forgot')}>
                            Forget Password?
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default LogInComp;
