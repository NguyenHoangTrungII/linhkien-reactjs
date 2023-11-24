import { API_URL } from '../../utils/Config';
import { timeoutPromise } from '../../utils/Tools';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const PRODUCT_LOADING = 'PRODUCT_LOADING';
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_CATEGORYLIST = 'FETCH_CATEGORYLIST';
export const FETCH_PRODUCTBYNAME = 'FETCH_PRODUCTBYNAME';
export const FETCH_PRODUCTSBYID = 'FETCH_PRODUCTSBYID';
export const FETCH_PRODUCTFILTER = 'FETCH_PRODUCTFILTER';

export const getAllProduct = () => {
    return async (dispatch) => {
        dispatch({
            type: PRODUCT_LOADING,
        });

        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/product/`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json;charset=utf-8 ',
                    },
                    method: 'GET',
                }),
            );

            if (!response.ok) {
                dispatch({ type: PRODUCT_FAILURE });
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();

            dispatch({
                type: FETCH_PRODUCTS,
                products: resData,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const getProductByID = (productid) => {
    return async (dispatch) => {
        dispatch({
            type: PRODUCT_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/product/${productid}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json;charset=utf-8 ',
                    },
                    method: 'GET',
                }),
            );

            if (!response.ok) {
                dispatch({
                    type: PRODUCT_FAILURE,
                });
                throw new Error("Something went wrong!, can't get the products");
            }
            const resData = await response.json();

            console.log('aaa', resData);

            dispatch({
                type: FETCH_PRODUCTSBYID,
                productsbyID: resData,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const getProductByName = (name) => {
    return async (dispatch, getState) => {
        dispatch({
            type: PRODUCT_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/product/search?productName=${name}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json;charset=utf-8 ',
                    },
                    method: 'GET',
                }),
            );

            if (!response.ok) {
                dispatch({
                    type: PRODUCT_FAILURE,
                });
                throw new Error("Something went wrong!, can't get the products");
            }
            const resData = await response.json();

            console.log('ne he', resData);

            dispatch({
                type: FETCH_PRODUCTBYNAME,
                productsbyname: resData,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const getProductByCategory = (name) => {
    return async (dispatch, getState) => {
        dispatch({
            type: PRODUCT_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/product/search?productName=${name}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json;charset=utf-8 ',
                    },
                    method: 'GET',
                }),
            );

            if (!response.ok) {
                dispatch({
                    type: PRODUCT_FAILURE,
                });
                throw new Error("Something went wrong!, can't get the products");
            }
            const resData = await response.json();

            dispatch({
                type: FETCH_PRODUCTBYNAME,
                productsbyname: resData,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const getProductFilter = (params) => {
    return async (dispatch, getState) => {
        dispatch({
            type: PRODUCT_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/product/advanced-search?${params.toString()}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    method: 'GET',
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: PRODUCT_FAILURE,
                });
                throw new Error("Something went wrong!, can't get the products");
            }

            const resData = await response.json();

            console.log('res', resData);

            dispatch({
                type: FETCH_PRODUCTFILTER,
                productFilter: resData,
            });
        } catch (err) {
            throw err;
        }
    };
};
