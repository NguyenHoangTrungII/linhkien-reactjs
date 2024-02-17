import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import CardHorizontal from '~/component/CardHorizontal';
import * as searchService from '~/services/searchService';
import { getProductByName } from '~/redux/actions/productAction';
import { Empty } from 'antd';

const cx = classNames.bind(styles);

function Search({ className = '' }) {
    const dispatch = useDispatch();
    const productListByName = useSelector((state) => state.store.productsbyname);
    const isLoading = useSelector((state) => state.store.isLoadingSearch);

    const [showResult, setShowResult] = useState(false);
    const [searchResult, setsearchResult] = useState([]);

    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const deBounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!searchValue.trim()) {
            setsearchResult([]);
            return;
        }

        const fetching = async () => {
            try {
                setLoading(true);
                await dispatch(getProductByName(deBounceValue));
                setsearchResult(productListByName);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        fetching();

        // eslint-disable-next-line
    }, [deBounceValue]);

    function handleChange(e) {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) setSearchValue(e.target.value);
    }

    function handleClear() {
        setSearchValue('');
        setsearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        //ignore Teddy warning
        <HeadlessTippy
            interactive
            placement="top-start"
            offset={[-10, 0]}
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {productListByName.length !== 0 && <h4 className={cx('search-title')}>Product</h4>}
                        {productListByName.length !== 0 ? (
                            productListByName.map((result) => (
                                <CardHorizontal key={result.id} data={result} isPrice="true" />
                            ))
                        ) : (
                            <div className={cx('error-search')}>
                                <Empty />
                            </div>
                        )}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search', className)}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="what are you looking for?"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {/* button clear */}
                {!!searchValue && !loading && (
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
                    </button>
                )}
                {/* button loading */}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                {/* button search */}
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
