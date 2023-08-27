import classNames from 'classnames/bind';

import styles from './SmallNotification.module.scss';

const cx = classNames.bind(styles);

function SmallNotification({ notify, elementStyle = '', notifyStyle = '' }) {
    return (
        <div className={cx('wrapper')}>
            {/* element */}
            <div className={cx('element', elementStyle)} />

            {/* notify */}
            <div className={cx('notify', notifyStyle)}>{notify}</div>
        </div>
    );
}

export default SmallNotification;
