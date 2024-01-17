import classNames from 'classnames/bind';

import Header from '../Component/Header';
import Footer from '../Component/Footer';
import styles from './BaseLayout.module.scss';
import OverlayLoading from '~/component/OverlayLoading/OverlayLoading';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function BaseLayout({ children, isFluidContainer = false }) {
    const containerClass = isFluidContainer ? 'container-fluid' : 'container';

    const isLoading = useSelector((state) => state.cart.isLoading);

    return (
        <div>
            {isLoading && <OverlayLoading isLoading={isLoading} />}

            <Header className={cx('wrapper')} />

            <div className={containerClass}>
                <div className={cx('content')}>{children}</div>
            </div>

            <Footer />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}
export default BaseLayout;
