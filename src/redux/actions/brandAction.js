import { API_URL } from '../../utils/Config';
import { timeoutPromise } from '../../utils/Tools';
export const BRAND_LOADING = 'BRAND_LOADING';
export const BRAND_FAILURE = 'BRAND_FAILURE';
export const FETCH_BRAND = 'FETCH_BRAND';

export const getAllBrands = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: BRAND_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/category/`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    method: 'GET',
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: BRAND_FAILURE,
                });
                throw new Error("Something went wrong!, can't get your carts");
            }
            const resData = await response.json();

            dispatch({
                type: FETCH_BRAND,
                brands: resData,
            });
        } catch (err) {
            throw err;
        }
    };
    return;
};
