import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function InputText({
    primary,
    outline = false,
    lineunder = false,
    // text = false,
    disable = false,
    rounded = false,
    small = false,
    large = false,
    // children,
    // onClick,
    placeholder,
    className,
    Lefticon,
    Righticon,
    value = '',
    setValue = '',
    ...passProps
}) {
    let Comp = 'input';
    const props = {
        // onClick,
        ...passProps,
    };

    // if (disable) {
    //     // delete props.onClick;
    //     Object.keys(props).forEach((key) => {
    //         if (key.startsWith('on') && typeof props[key] === 'function') {
    //             delete props[key];
    //         }
    //     });
    // }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        lineunder,
        disable,
        rounded,
        small,
        large,
    });

    return <Comp className={classes} {...props} placeholder={placeholder} value={value} onChange={setValue} />;
}

InputText.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    lineunder: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    Lefticon: PropTypes.node,
    Righticon: PropTypes.node,
};

export default InputText;
