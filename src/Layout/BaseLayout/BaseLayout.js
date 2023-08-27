import classNames from 'classnames/bind';

import Header from '../Component/Header';
import Footer from '../Component/Footer';
import styles from './BaseLayout.module.scss';
const cx = classNames.bind(styles);

function BaseLayout({ children, isFluidContainer = false }) {
    const containerClass = isFluidContainer ? 'container-fluid' : 'container';

    return (
        <div>
            <Header className={cx('wrapper')} />

            <div className={containerClass}>
                <div className={cx('content')}>{children}</div>
            </div>

            <Footer />
        </div>
    );
}
export default BaseLayout;
