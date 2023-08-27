import classNames from 'classnames/bind';
import styles from './CheckBoxInput.module.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function CheckBoxInput({ text = '', textStyle = [] }) {
    return (
        <div className={cx('checkbox-container')}>
            <input type="checkbox" className={cx('checkbox-input')} />

            <div className={cx('text-style', ...textStyle)}>{text}</div>
        </div>
    );
}

export default CheckBoxInput;
