import { API_URL } from '../../utils/Config';
import { timeoutPromise } from '../../utils/Tools';
export const CART_LOADING = 'CART_LOADING';
export const CART_FAILURE = 'CART_FAILURE';
export const FETCH_CART = 'FETCH_CART';
export const ADD_CART = 'ADD_CART';
export const RESET_CART = 'RESET_CART';
// export const DES_CART_QUANTITY = 'DES_CART_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const ADD_QTY_ITEM = 'ADD_QTY_ITEM';
// export const ADD_TO_CART = 'ADD_TO_CART';
// export const CLEAR_CART = 'CLEAR_CART';
export const MINUS_QTY_ITEM = 'MINUS_QTY_ITEM';
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// export const SET_CART_ITEMS = 'SET_CART_ITEMS';

// export const setCartItems = (items = []) => ({
//     type: SET_CART_ITEMS,
//     payload: items,
// });

// export const addToCart = (product) => ({
//     type: ADD_TO_CART,
//     payload: product,
// });

// export const removeFromCart = (id) => ({
//     type: REMOVE_FROM_CART,
//     payload: id,
// });

// export const clearCart = () => ({
//     type: CLEAR_CART,
// });

// export const addQtyItem = (id) => ({
//     type: ADD_QTY_ITEM,
//     payload: id,
// });

// export const minusQtyItem = (id) => ({
//     type: MINUS_QTY_ITEM,
//     payload: id,
// });

export const fetchCart = () => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;
        const emptyCart = {
            items: [],
        };
        if (user.user._id != undefined) {
            dispatch({
                type: CART_LOADING,
            });
            try {
                const response = await timeoutPromise(
                    fetch(`${API_URL}/cart/me`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json; charset=utf-8',
                            Tokens: ` ${user.token}`,
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
                let carts = resData.cart.items;
                dispatch({
                    type: FETCH_CART,
                    carts: carts,
                    // total: resData.cart.totalPrice + 50000,
                    // totalnoship: resData.cart.totalPrice,
                });
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

        console.log('user-addtocart from cartaction', user);
        try {
            const response = await timeoutPromise(
                fetch(`${API_URL}/cart/${itemId}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Tokens: user.token,
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        quantity: 1,
                    }),
                }),
            );

            const resData = await response.json();

            let cartItem = resData.cart.items;
            if (!response.ok) {
                dispatch({
                    type: CART_FAILURE,
                });
                throw new Error('Something went wrong!');
            }

            dispatch({
                type: 'ADD_CART',
                cartItem: cartItem,
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
                        Tokens: user.token,
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
                        Tokens: user.token,
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

            if (oldqty - qty === 1) {
                dispatch({
                    type: 'ADD_QTY_ITEM',
                    cartItemId: itemId,
                });
            } else {
                dispatch({
                    type: 'MINUS_QTY_ITEM',
                    cartItemId: itemId,
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
                        'auth-token': user.token,
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
