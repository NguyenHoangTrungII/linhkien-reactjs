import classNames from 'classnames/bind';
import styles from './CheckBoxInput.module.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function CheckBoxInput({ text = '', textStyle = [], onChange }) {
    // const checkbox = document.getElementById('checkboxbrand');
    const handleOnChange = (event) => {
        if (onChange) {
            onChange(event.target.checked);
        }
    };
    return (
        // <div className={cx('checkbox-container')}>
        //     <input type="checkbox" className={cx('checkbox-input')} />
        //     <span class="checkmark"></span>

        //     <div className={cx('text-style', ...textStyle)}>{text}</div>
        // </div>

        <label className={cx('container')}>
            <label>{text}</label>
            <input type="checkbox" className={cx('input-checkbox')} onChange={handleOnChange} id="checkboxbrand" />
            <span className={cx('checkmark')}></span>
        </label>
    );
}

export default CheckBoxInput;
