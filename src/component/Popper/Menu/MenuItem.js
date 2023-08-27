import PropTypes from 'prop-types';
import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classes} Lefticon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.prototype = {
    data: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MenuItem;
