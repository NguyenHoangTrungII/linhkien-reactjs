import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Breadcrumbs.module.scss';
import { useSelector } from 'react-redux';

function BreadcrumbsComponent() {
    const products = useSelector((state) => state.store.products);
    const history = useNavigate();
    const location = useLocation();
    const [pathSegments, setPathSegments] = useState([]);

    useEffect(() => {
        const segments = location.pathname.split('/').filter(Boolean);
        setPathSegments(segments);
    }, [location]);

    const handleClick = (index) => {
        const newPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
        history(newPath);
    };

    const findName = (id) => {
        console.log(products);
        const foundProduct = products.find((product) => product._id.toString() === id);

        return foundProduct ? foundProduct.name : '';
    };

    const cx = classNames.bind(styles);

    return (
        <Breadcrumbs aria-label="breadcrumb" className={cx('breadcrumbs-container')}>
            <Link color="inherit" fontSize="inherit" href={`/`} underline="false">
                Home
            </Link>
            {pathSegments.slice(0, -1).map((segment, index) => (
                <Link
                    className={cx('breadcrumbs')}
                    key={index}
                    color="inherit"
                    onClick={() => handleClick(index)}
                    href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                    fontSize="inherit"
                    underline="false"
                >
                    {segment}
                </Link>
            ))}
            <Typography fontSize="inherit" className={cx('current-breadcrumbs')}>
                {!!findName(pathSegments[pathSegments.length - 1])
                    ? findName(pathSegments[pathSegments.length - 1])
                    : pathSegments[pathSegments.length - 1]}
            </Typography>
        </Breadcrumbs>
    );
}

export default BreadcrumbsComponent;
