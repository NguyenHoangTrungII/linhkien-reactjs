import CartDetail from '~/component/CartDetail';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import OverlayLoading from '~/component/OverlayLoading/OverlayLoading';
import { addQtyItem, fetchCart, minusQtyItem, updateQuantity } from '~/redux/actions/cartAction';
import { Breadcrumbs } from '@mui/material';
import BreadcrumbsComponent from '~/component/Breadcrumbs/Breadcrumbs ';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const isLoading = useSelector((state) => state.cart.isLoading);
    const [refresh, setRefresh] = useState(false);

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

    console.log(cart.cartItems);

    return (
        <div style={{ paddingTop: 130 }}>
            {isLoading && <OverlayLoading isLoading={isLoading} />}
            <BreadcrumbsComponent />
            <CartDetail cart={cart} />
        </div>
    );
}

export default Cart;
