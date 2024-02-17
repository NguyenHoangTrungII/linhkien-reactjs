import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './ProductListComp.module.scss';
import { Slider } from 'antd';
import CheckBoxInput from '../CheckBoxInput';
import Separator from '../Separator';
import formatCurrency from '~/helpers/currencyFormatter';
import useCart from '~/hooks/useCart';
import ProductSlider from '../Slider';
import Button from '../Button';
import { getProductFilter } from '~/redux/actions/productAction';
import PaginationCustomer from '../PaginationCustomer/PaginationCustomer';

const cx = classNames.bind(styles);

function ProductListComp({ products = [], brand, data }) {
    const { addToCart } = useCart();
    const dispatch = useDispatch();
    const [priceRange, setPriceRange] = useState([500000, 10000000]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const uncheckAllCheckboxes = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };

    const fetchProductFilter = async (params) => {
        try {
            await dispatch(getProductFilter(params));
        } catch (err) {
            console.log(err);
        }
    };

    const applyFilter = () => {
        const params = new URLSearchParams(window.location.search);
        params.set('minPrice', priceRange[0]);
        params.set('maxPrice', priceRange[1]);
        selectedBrands.forEach((brandId) => {
            params.append('brandId', brandId);
        });
        selectedBrands.forEach((brandId) => {
            params.append('brandId', brandId);
        });

        fetchProductFilter(params);

        setPriceRange([0, 100]);
        setSelectedBrands([]);
        uncheckAllCheckboxes();
    };

    const handleBrandChange = (brandId, isChecked) => {
        setSelectedBrands((prevSelectedBrands) => {
            if (isChecked) {
                return [...prevSelectedBrands, brandId];
            } else {
                return prevSelectedBrands.filter((id) => id !== brandId);
            }
        });
    };

    return (
        <div className={cx('row', 'productlist-container')}>
            <div className={cx('col-3', 'action-wrapper')}>
                <div className={cx('filter-by-brand')}>
                    <h3 className={cx('title-brand')}>Brand</h3>
                    <Separator className={cx('filter-separator')} />

                    <div className={cx('name-brands')}>
                        {brand.map((item, index) => {
                            return (
                                <CheckBoxInput
                                    key={index}
                                    text={item.name}
                                    to={item.id}
                                    onChange={(isChecked) => handleBrandChange(item.id, isChecked)}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={cx('filter-by-price')}>
                    <div className={cx('inner-filter')}>
                        <h3 className={cx('title-brand')}>Price</h3>
                        <Separator className={cx('filter-separator')} />
                        <Slider
                            range
                            step={1}
                            min={0}
                            defaultValue={priceRange}
                            onChange={setPriceRange}
                            max={100000000}
                            tipFormatter={formatCurrency}
                            className={cx('slider-price')}
                            trackStyle={[{ backgroundColor: '#DB4444' }, { backgroundColor: '#DB4444' }]}
                            handleStyle={{ borderColor: '#DB4444' }}
                            dotStyle={{ borderColor: '#DB4444', backgroundColor: '#DB4444' }}
                        />
                    </div>
                </div>
                <Button outline large className={cx('applyfilter-btn')} onClick={applyFilter}>
                    Apply
                </Button>
            </div>
            <div className={cx('col-9', 'action-wrapper')}>
                {products.length <= 0 ? (
                    <img
                        src={require('../../public/uploads/cart/empty_product.png')}
                        alt="empty-cart"
                        className={cx('empty-cart-photo')}
                    />
                ) : (
                    <ProductSlider
                        arrowVisible={false}
                        // rowNumber={products.length / 3 < 1 ? 1 : Math.ceil(products.length / 3)}
                        slidesToShow={products.length > 4 ? products.length : 3}
                        products={products}
                        addToCart={addToCart}
                    />
                )}
            </div>
            <div className={cx('footer-productList')}>
                {data.totalPage > 1 && <PaginationCustomer count={data.totalPage} />}
            </div>
        </div>
    );
}

export default ProductListComp;
