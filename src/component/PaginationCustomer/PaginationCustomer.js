import Pagination from '@mui/material/Pagination';
import classNames from 'classnames/bind';
import styles from './PaginationCustomer.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function PaginationCustomer({ count }) {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleChangePage = (event, page) => {
        setCurrentPage(page);
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('PageIndex', page);

        navigate(`${window.location.pathname}?${searchParams.toString()}`);
    };

    return (
        <div>
            <Pagination
                count={count}
                page={currentPage}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
            />
        </div>
    );
}

export default PaginationCustomer;
