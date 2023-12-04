import React from 'react';
import { useDispatch } from 'react-redux';
import CartDetail from '~/component/CartDetail';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import OverlayLoading from '~/component/OverlayLoading/OverlayLoading';
import { fetchCart } from '~/redux/actions/cartAction';
import BreadcrumbsComponent from '~/component/Breadcrumbs/Breadcrumbs ';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const isLoading = useSelector((state) => state.cart.isLoading);

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
        // eslint-disable-next-line
    }, [dispatch]);

    return (
        <div style={{ paddingTop: 100 }}>
            {isLoading && <OverlayLoading isLoading={isLoading} />}
            <BreadcrumbsComponent />
            <CartDetail cart={cart} />
        </div>
    );
}

export default Cart;
