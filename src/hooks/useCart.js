// import { displayActionMessage } from '~/helpers/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart as dispatchAddToCart, removeFromCart } from '~/redux/actions/cartAction';

const useCart = () => {
    const { cart } = useSelector((state) => ({ cart: state.cart.cartItems }));
    const dispatch = useDispatch();

    console.log('cart nè', cart);

    const isItemOnCart = (id) => {
        for (const key in cart) {
            if (cart[key].productId?._id === id) {
                return true;
            }
        }
        return false;
    };

    const addToCart = (product) => {
        if (isItemOnCart(product._id)) {
            dispatch(removeFromCart(product._id));
        } else {
            dispatch(dispatchAddToCart(product._id));
        }
    };

    return { cart, isItemOnCart, addToCart };
};

export default useCart;
