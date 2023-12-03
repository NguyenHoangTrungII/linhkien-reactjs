// import { displayActionMessage } from '~/helpers/utils';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart as dispatchAddToCart, removeFromCart } from '~/redux/actions/cartAction';

const useCart = () => {
    // const { cart } = useSelector((state) => ({ cart: state.cart.cartItems }));
    const dispatch = useDispatch();

    // console.log('cart nè', cart);

    // const isItemOnCart = (id) => {
    //     for (const key in cart) {
    //         if (cart[key].productId?._id === id) {
    //             return true;
    //         }
    //     }
    //     return false;
    // };

    const addToCart = (product) => {
        dispatch(dispatchAddToCart(product._id));

        // if (isItemOnCart(product._id)) {
        //     dispatch(removeFromCart(product._id));
        // } else {
        // }
    };

    return { addToCart };
};

export default useCart;
