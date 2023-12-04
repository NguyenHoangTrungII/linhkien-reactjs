import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
import InputText from '../Input/Input';
import Button from '../Button/Button';
import { Login } from '~/redux/actions/authAction';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function LogInComp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector((state) => state.auth.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(error);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            console.log(email, password);
            const loginPromise = dispatch(Login(email, password));
            await toast.promise(loginPromise, {
                pending: 'Logging in...',
                success: 'Logged in successfully ',
                error: error.error,
            });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

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
                        <InputText
                            lineunder
                            className={cx('email')}
                            placeholder={'Email or Phone Number'}
                            value={email}
                            setValue={handleEmailChange}
                        />
                        <InputText
                            lineunder
                            className={cx('password')}
                            placeholder={'Password'}
                            value={password}
                            setValue={handlePasswordChange}
                        />
                    </div>

                    <div className={cx('login-footer')}>
                        <Button primary className={cx('btn-login')} onClick={handleSubmit}>
                            Log in
                        </Button>
                        <Button text className={cx('btn-forgot')}>
                            Forget Password?
                        </Button>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>

        // </div>
    );
}

export default LogInComp;
