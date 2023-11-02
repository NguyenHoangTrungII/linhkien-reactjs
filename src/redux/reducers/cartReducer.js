import {
    ADD_QTY_ITEM,
    ADD_TO_CART,
    CLEAR_CART,
    MINUS_QTY_ITEM,
    REMOVE_FROM_CART,
    SET_CART_ITEMS,
} from '../actions/cartAction';

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            return action.payload;
        case ADD_TO_CART:
            return state.some((product) => product._id === action.payload.id) ? state : [action.payload, ...state];
        case REMOVE_FROM_CART:
            return state.filter((product) => product._id !== action.payload);
        case CLEAR_CART:
            return [];
        case ADD_QTY_ITEM:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                }
                return product;
            });
        case MINUS_QTY_ITEM:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                    };
                }
                return product;
            });
        default:
            return state;
    }
};
