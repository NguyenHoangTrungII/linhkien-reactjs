// import {
//     ADD_QTY_ITEM,
//     ADD_TO_CART,
//     CLEAR_CART,
//     MINUS_QTY_ITEM,
//     REMOVE_FROM_CART,
//     SET_CART_ITEMS,
// } from '../actions/cartAction';

// export const cartReducer = (state = [], action) => {
//     switch (action.type) {
//         case SET_CART_ITEMS:
//             return action.payload;
//         case ADD_TO_CART:
//             return state.some((product) => product._id === action.payload.id) ? state : [action.payload, ...state];
//         case REMOVE_FROM_CART:
//             return state.filter((product) => product._id !== action.payload);
//         case CLEAR_CART:
//             return [];
//         case ADD_QTY_ITEM:
//             return state.map((product) => {
//                 if (product._id === action.payload) {
//                     return {
//                         ...product,
//                         quantity: product.quantity + 1,
//                     };
//                 }
//                 return product;
//             });
//         case MINUS_QTY_ITEM:
//             return state.map((product) => {
//                 if (product._id === action.payload) {
//                     return {
//                         ...product,
//                         quantity: product.quantity - 1,
//                     };
//                 }
//                 return product;
//             });
//         default:
//             return state;
//     }

// };

import { Cart } from '../../models/Cart';
import {
    ADD_CART,
    FETCH_CART,
    REMOVE_FROM_CART,
    // DES_CART_QUANTITY,
    RESET_CART,
    CART_LOADING,
    CART_FAILURE,
    MINUS_QTY_ITEM,
    ADD_QTY_ITEM,
} from '../actions/cartAction';
// import { LOGOUT } from '../auth/authActions';

const emptyCart = {
    items: [],
};
const initialState = {
    cartItems: emptyCart,
    isLoading: false,
};

const findIndex = (cartList, id) => {
    const index = cartList.findIndex((cart) => {
        return cart._id === id;
    });
    return index;
};

export const cartReducer = (state = initialState, action) => {
    const cartList = state.cartItems;
    switch (action.type) {
        case CART_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case CART_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case FETCH_CART:
            return {
                ...state,
                cartItems: action.carts,
                // total: action.total,
                // totalnoship: action.totalnoship,
                isLoading: false,
            };

        case ADD_CART:
            const id = action.cartItem._id;
            if (cartList.length !== 0) {
                const index = findIndex(cartList, id);
                if (index >= 0) {
                    cartList[index] = new Cart(action.cartItem, +cartList[index].quantity + 1);
                } else {
                    const newItem = new Cart(action.cartItem, 1);
                    cartList.push(newItem);
                }
            } else {
                const newItem = new Cart(action.cartItem, 1);
                cartList.push(newItem);
            }

            return {
                ...state,
                cartItems: { ...state.cartItems },
                isLoading: false,
            };
        case REMOVE_FROM_CART:
            const { itemId } = action;
            const indexItem = findIndex(cartList, itemId);
            cartList.splice(indexItem, 1);
            return {
                ...state,
                cartItems: { ...state.cartItems },
                isLoading: false,
            };
        case MINUS_QTY_ITEM:
            const { cartItemId } = action;
            const index = findIndex(cartList, cartItemId);
            cartList[index].quantity = +cartList[index].quantity - 1;
            return {
                ...state,
                cartItems: { ...state.cartItems },
                isLoading: false,
            };
        case ADD_QTY_ITEM: {
            const { cartItemId } = action;
            const index = findIndex(cartList, cartItemId);
            cartList[index].quantity = +cartList[index].quantity + 1;
            return {
                ...state,
                cartItems: { ...state.cartItems },
                isLoading: false,
            };
        }
        case RESET_CART:
            state.cartItems.items = [];
            return {
                ...state,
                cartItems: { ...state.cartItems },
                isLoading: false,
            };
        // case LOGOUT: {
        //     return {
        //         cartItems: emptyCart,
        //         isLoading: false,
        //     };
        // }

        default:
            return state;
    }
};
