import classNames from 'classnames/bind';

import styles from './Separator.module.scss';

const cx = classNames.bind(styles);

function Separator({ className = '' }) {
    return <div className={cx('separator', className)} />;
}

export default Separator;
