import { API_URL } from '../../utils/Config';
import { timeoutPromise } from '../../utils/Tools';
export const CATEGORY_LOADING = 'CATEGORY_LOADING';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';

export const getAllCategories = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: CATEGORY_LOADING,
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
                    type: CATEGORY_FAILURE,
                });
                throw new Error("Something went wrong!, can't get your carts");
            }
            const resData = await response.json();

            dispatch({
                type: FETCH_CATEGORY,
                categories: resData,
            });
        } catch (err) {
            throw err;
        }
    };
    return;
};
