// import { Default } from 'react-toastify/dist/utils';
import {
    ADD_ORDER,
    PAYMENT_ORDER,
    PAYMENT_CALLBACK,
    FETCH_ORDER,
    ORDER_LOADING,
    ORDER_FAILURE,
} from '../actions/orderAction';

const initialState = {
    paymentURL: [],
    paymentCallBack: {},
    orders: [],
    isLoading: false,
    isPayment: false,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case ORDER_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case FETCH_ORDER:
            return {
                ...state,
                orders: action.orderData,
                isLoading: false,
            };
        case ADD_ORDER:
            const newOrder = action.orderItem;
            return {
                ...state,
                orders: action.orders.concat(newOrder),
                isLoading: false,
            };
        case PAYMENT_ORDER:
            console.log(action.paymentURL);
            return {
                ...state,
                paymentURL: [action.paymentURL],
                isLoading: false,
            };
        case PAYMENT_CALLBACK:
            return {
                ...state,
                paymentCallBack: { ...action.paymentCallBack },
                isLoading: false,
                isPayment: true,
            };
        default:
            return state;
    }
};
