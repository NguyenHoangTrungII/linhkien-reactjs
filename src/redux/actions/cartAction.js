export const ADD_QTY_ITEM = 'ADD_QTY_ITEM';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const MINUS_QTY_ITEM = 'MINUS_QTY_ITEM';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART_ITEMS = 'SET_CART_ITEMS';

export const setCartItems = (items = []) => ({
    type: SET_CART_ITEMS,
    payload: items,
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const addQtyItem = (id) => ({
    type: ADD_QTY_ITEM,
    payload: id,
});

export const minusQtyItem = (id) => ({
    type: MINUS_QTY_ITEM,
    payload: id,
});
