import CheckOutComp from '~/component/CheckOut';
import CartDetail from '~/component/CartDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCart } from '~/redux/actions/cartAction';

function CheckOut() {
    // const dispatch = useDispatch();

    // const isLoading = useSelector((state) => state.cart.isLoading);

    // useEffect(() => {
    //     if (!isLoading) {
    //         const fetching = async () => {
    //             try {
    //                 await dispatch(fetchCart());
    //             } catch (err) {
    //                 console.log(err);
    //             }
    //         };
    //         fetching();
    //     }
    // });

    // const cart = useSelector((state) => state.cart);

    // console.log('aaaaaaaaaaaaaaaaaaa', cart);
    const cart = useSelector((state) => state.cart.cartItems);

    return (
        <>
            <CheckOutComp cart={cart} />
        </>
    );
}

export default CheckOut;
