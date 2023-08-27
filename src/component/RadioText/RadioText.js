import classNames from 'classnames/bind';
import styles from './RadioText.module.scss';

const cx = classNames.bind(styles);

function RadioText({ text = '', textStyle = [], className }) {
    return (
        <div className={cx('radio-container', className)}>
            <input type="radio" className={cx('radio-input')} />

            <div className={cx('text-style', ...textStyle)}>{text}</div>
        </div>
    );
}

export default RadioText;
