import CartDetail from '~/component/CartDetail';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import OverlayLoading from '~/component/OverlayLoading/OverlayLoading';
import { addQtyItem, fetchCart, minusQtyItem, updateQuantity } from '~/redux/actions/cartAction';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const isLoading = useSelector((state) => state.cart.isLoading);
    const [refresh, setRefresh] = useState(false);

    // console.log(cart);
    // const { addToCart, isItemOnCart } = useCart();

    // const [qty, setQty] = useState(cart.map(() => 1));
    const history = useNavigate();

    const onClickItem = (id) => {
        history(`/ProductDetail/${id}`);
    };

    useEffect(() => {
        if (!isLoading) {
            const fetching = async () => {
                try {
                    await dispatch(fetchCart());
                } catch (err) {
                    console.log(err);
                }
            };
            fetching();
        }
    }, []);

    const handlePageRefresh = () => {
        setRefresh((prevRefresh) => !prevRefresh);
    };

    window.onload = handlePageRefresh;

    return (
        <div>
            {isLoading && <OverlayLoading isLoading={isLoading} />}

            <CartDetail cart={cart} />
        </div>
    );
}

export default Cart;
