import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import CardHorizontal from '~/component/CardHorizontal';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Cart() {
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setsearchResult] = useState([]);

    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const deBounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        // setLoading(true);
        // setTimeout(() => setLoading(false), 500);

        if (!searchValue.trim()) {
            setsearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchService.search(deBounceValue);
            // console.log(deBounceValue);
            // console.log(result);
            setsearchResult(result);
            setLoading(false);
        };

        fetchAPI();
        // eslint-disable-next-line
    }, [deBounceValue]);

    // function handleChange(e) {
    //     const searchValue = e.target.value;
    //     if (!searchValue.startsWith(' ')) setSearchValue(e.target.value);
    // }

    // function handleClear() {
    //     setSearchValue('');
    //     setsearchResult([]);
    //     inputRef.current.focus();
    // }

    // const handleHideResult = () => {
    //     setShowResult(false);
    // };

    // console.log('searchResult', searchResult.length > 0);
    // console.log('showResult', showResult);

    return (
        //ignore Teddy warning

        <HeadlessTippy
            // interactive
            // visible={showResult && searchResult.length > 0}
            // onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Product</h4>

                        {searchResult.slice(0, 5).map((result) => (
                            <CardHorizontal key={result._id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        ></HeadlessTippy>
    );
}

export default Cart;
