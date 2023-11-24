import ProductListComp from '~/component/ProductListComp';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductFilter } from '~/redux/actions/productAction';
import { getAllBrands } from '~/redux/actions/brandAction';

function ProductList() {
    const dispatch = useDispatch();
    const productsFilter = useSelector((state) => state.store.productFilter);
    const brands = useSelector((state) => state.brand.brands);

    function getAllParamsFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const params = {};

        for (const [key, value] of urlParams) {
            if (params[key]) {
                if (Array.isArray(params[key])) {
                    params[key].push(value);
                } else {
                    params[key] = [params[key], value];
                }
            } else {
                params[key] = value;
            }
        }

        return params;
    }

    function appendParamsToSearchParams(paramsObject, searchParams) {
        for (const key in paramsObject) {
            if (Object.prototype.hasOwnProperty.call(paramsObject, key)) {
                const value = paramsObject[key];
                if (Array.isArray(value)) {
                    value.forEach((element) => {
                        searchParams.append(key, element);
                    });
                } else {
                    searchParams.append(key, value);
                }
            }
        }
    }

    const allParams = getAllParamsFromURL();

    const params = new URLSearchParams();
    appendParamsToSearchParams(allParams, params);

    console.log(params.toString());

    useEffect(() => {
        const fetching = async () => {
            try {
                await dispatch(getProductFilter(params));

                await dispatch(getAllBrands());
            } catch (err) {
                console.log(err);
            }
        };

        fetching();
    }, []);

    // console.log('aaa', productsFilter);

    return <div style={{ paddingTop: 200 }}>{<ProductListComp products={productsFilter} brand={brands} />}</div>;
}

export default ProductList;
