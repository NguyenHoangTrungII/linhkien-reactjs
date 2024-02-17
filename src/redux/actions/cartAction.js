import { API_URL } from '../../utils/Config';
import { timeoutPromise } from '../../utils/Tools';
export const CART_LOADING = 'CART_LOADING';
export const CART_FAILURE = 'CART_FAILURE';
export const FETCH_CART = 'FETCH_CART';
export const ADD_CART = 'ADD_CART';
export const RESET_CART = 'RESET_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_QTY_ITEM = 'ADD_QTY_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const MINUS_QTY_ITEM = 'MINUS_QTY_ITEM';
export const UPDATE_CART = 'UPDATE_CART';

export const fetchCart = () => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;
        console.log('user', user.id);
        if (user.id !== undefined) {
            dispatch({
                type: CART_LOADING,
            });
            try {
                const response = await timeoutPromise(
                    fetch(`${API_URL}/cart/me`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json; charset=utf-8',
                            Authorization: `Bearer ${user.token}`,
                        },
                        method: 'GET',
                    }),
                );
                if (!response.ok) {
                    dispatch({
                        type: CART_FAILURE,
                    });
                    throw new Error("Something went wrong!, can't get your carts");
                }
                const resData = await response.json();
                console.log('fetch cart', resData.data.items);
                if (resData.data.items != null) {
                    dispatch({
                        type: FETCH_CART,
                        carts: resData.data.items,
                        // total: resData.cart.totalPrice + 50000,
                        // totalnoship: resData.cart.totalPrice,
                    });
                } else {
                    dispatch({
                        type: FETCH_CART,
                        carts: [],
                        // total: resData.cart.totalPrice + 50000,
                        // totalnoship: resData.cart.totalPrice,
                    });
                }
            } catch (err) {
                throw err;
            }
        }
        return;
    };
};

export const addToCart = (itemId) => {
    return async (dispatch, getState) => {
        dispatch({
            type: CART_LOADING,
        });
        const user = getState().auth.user;

        console.log('user-addtocart from cartaction', user.token);
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/cart/addToCart/${itemId}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        quantity: 1,
                    }),
                }),
            );

            const resData = await response.json();

            let cartItem = resData.data;
            console.log(cartItem);

            if (!response.ok) {
                dispatch({
                    type: CART_FAILURE,
                });
                throw new Error('Something went wrong!');
            }

            dispatch({
                type: 'ADD_CART',
                cartItems: cartItem,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const removeFromCart = (itemId) => {
    return async (dispatch, getState) => {
        dispatch({
            type: CART_LOADING,
        });
        const user = getState().auth.user;
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/cart/items/${itemId}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    method: 'DELETE',
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: CART_FAILURE,
                });
                throw new Error('Something went wrong!');
            }
            dispatch({
                type: 'REMOVE_FROM_CART',
                itemId,
            });
        } catch (err) {
            throw err;
        }
    };
};

export const updateQuantity = (itemId, qty, oldqty) => {
    return async (dispatch, getState) => {
        dispatch({
            type: CART_LOADING,
            //set true
        });
        const user = getState().auth.user;
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/cart/items/${itemId}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    method: 'PATCH',
                    body: JSON.stringify({
                        quantity: qty,
                    }),
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: CART_FAILURE,
                });
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            let carts = resData.data;

            if (oldqty - qty === 1) {
                // dispatch({
                //     type: 'ADD_QTY_ITEM',
                //     cartItemId: itemId,
                // });

                dispatch({
                    type: UPDATE_CART,
                    carts: carts,
                });
            } else {
                // dispatch({
                //     type: 'FETCH_CART',
                //     cartItemId: itemId,
                // });

                dispatch({
                    type: UPDATE_CART,
                    carts: carts,
                });
            }
        } catch (err) {
            throw err;
        }
    };
};

export const resetCart = (cartId) => {
    return async (dispatch, getState) => {
        dispatch({
            type: CART_LOADING,
        });
        const user = getState().auth.user;
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/cart/${cartId}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    method: 'DELETE',
                }),
            );
            if (!response.ok) {
                dispatch({
                    type: CART_FAILURE,
                });
                throw new Error('Something went wrong!');
            }

            dispatch({
                type: 'RESET_CART',
            });
        } catch (err) {
            throw err;
        }
    };
};

export const resetCartOrder = () => {
    return {
        type: 'RESET_CART',
    };
};
