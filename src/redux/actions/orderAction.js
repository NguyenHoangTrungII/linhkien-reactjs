import { API_URL } from '../../utils/Config';
import { timeoutPromise } from '../../utils/Tools';
import { resetCartOrder } from './cartAction';
export const ORDER_LOADING = 'ORDER_LOADING';
export const ORDER_FAILURE = 'ORDER_FAILURE';
export const FETCH_ORDER = 'FETCH_ORDER';
export const ADD_ORDER = 'ADD_ORDER';
export const PAYMENT_ORDER = 'PAYMENT_ORDER';
export const PAYMENT_CALLBACK = 'PAYMENT_CALLBACK';
export const ERROR = 'ERROR';
export const RESET_CART = 'RESET_CART';

export const fetchOrder = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: ORDER_LOADING,
        });
        const user = getState().auth.user;
        if (user.userid == undefined) {
            return;
        }
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/order`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'auth-token': user.token,
                    },
                    method: 'GET',
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: ORDER_FAILURE,
                });
                throw new Error("Something went wrong! Can't get your order");
            }
            const resData = await response.json();
            const filterUserOrder = resData.content.filter((userOrder) => userOrder.userId._id === user.userid);
            dispatch({
                type: FETCH_ORDER,
                orderData: filterUserOrder,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const createOrder = (mode) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;

        dispatch({
            type: ORDER_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/createOrder`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    method: 'POST',
                    body: JSON.stringify({}),
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: ORDER_FAILURE,
                });
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            console.log(response);
            dispatch({
                type: ADD_ORDER,
                orderItem: resData.content,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const payment = (formData) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;

        dispatch({
            type: ORDER_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/Order/paymentURL`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    method: 'POST',
                    body: JSON.stringify(formData), // Chuyển đối tượng formData thành chuỗi JSON
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: ORDER_FAILURE,
                });
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            console.log(response);

            dispatch({
                type: PAYMENT_ORDER,
                paymentURL: resData,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const paymentCallBack = (paras) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;

        dispatch({
            type: ORDER_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/Order/paymentCallback?${paras.toString()}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    method: 'GET',
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: ORDER_FAILURE,
                });
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            console.log(resData);
            dispatch({
                type: PAYMENT_CALLBACK,
                paymentCallBack: resData,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const CreateOrder = (data) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;

        dispatch({
            type: ORDER_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/Order/createOrder`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    method: 'POST',
                    body: JSON.stringify(data),
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: ORDER_FAILURE,
                });
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            console.log(resData);
            dispatch({
                type: PAYMENT_CALLBACK,
                paymentURL: resData,
            });

            //Reset lại giỏ hàng
            dispatch(resetCartOrder());
        } catch (err) {
            throw err;
        }
    };
};

export const getOrderByStatus = (status) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;

        dispatch({
            type: ORDER_LOADING,
        });
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/Order/createOrder`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        pageIndex: 1,
                        pageSize: 2,
                        status: status,
                    }),
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: ORDER_FAILURE,
                });
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            dispatch({
                type: FETCH_ORDER,
                orderData: resData.data,
            });
        } catch (err) {
            throw err;
        }
    };
};
