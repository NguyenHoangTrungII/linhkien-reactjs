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

const cx = classNames.bind(styles);

function Search({ className = '' }) {
    const dispatch = useDispatch();
    const productListByName = useSelector((state) => state.store.productsbyname);
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

        // const fetchAPI = async () => {
        //     setLoading(true);
        //     const result = await searchService.search(deBounceValue);
        //     // console.log(deBounceValue);
        //     // console.log(result);
        //     setsearchResult(result);
        //     setLoading(false);
        // };

        // fetchAPI();
        // eslint-disable-next-line

        const fetching = async () => {
            try {
                setLoading(true);
                await dispatch(getProductByName(deBounceValue));

                const result = productListByName;
                // setsearchResult(result);
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

    // console.log('searchResult', searchResult.length > 0);
    // console.log('showResult', showResult);

    const a = [
        {
            name: 'RAM Corsair Vengeance RGB Pro 16GB (2 x 8GB)',
            _id: '655227f5ee12e8d16b7b2abc',
            thumbnailUrl:
                'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/yuil8c8kknqv4lkjqexi.jpg',
            categoryName: 'RAM',
            price: '2700000',
        },
        {
            name: 'RAM G.Skill Trident Z RGB 64GB (4 x 16GB)',
            _id: '65522918ee12e8d16b7b2ae7',
            thumbnailUrl:
                'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228286/product-cloud/xmyljxoyvob5buxpxhs8.jpg',
            categoryName: 'RAM',
            price: '8500000',
        },
        {
            name: 'RAM G.Skill Trident Z RGB 64GB (4 x 16GB)',
            _id: '6552296bee12e8d16b7b2b0d',
            thumbnailUrl:
                'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228394/product-cloud/f5tphkwncshmecepj3ql.png',
            categoryName: 'RAM',
            price: '8500000',
        },
    ];
    return (
        //ignore Teddy warning
        <HeadlessTippy
            interactive
            placement="top-start"
            offset={[-10, 0]}
            // inlinePositioning={true}
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Product</h4>

                        {a.map((result) => (
                            <CardHorizontal key={result._id} data={result} isPrice="true" />
                        ))}
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
