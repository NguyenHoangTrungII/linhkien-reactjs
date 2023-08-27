import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.modules.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outline = false,
    text = false,
    disable = false,
    rounded = false,
    small = false,
    large = false,
    children,
    onClick,
    className,
    Lefticon,
    Righticon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disable,
        rounded,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {Lefticon && <span className={cx('icon')}>{Lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {Righticon && <span className={cx('icon')}>{Righticon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
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

export default Button;
