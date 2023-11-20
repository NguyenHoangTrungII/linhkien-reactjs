// import { displayActionMessage } from '~/helpers/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart as dispatchAddToCart, removeFromCart } from '~/redux/actions/cartAction';

const useCart = () => {
    const { cart } = useSelector((state) => ({ cart: state.cart.cartItems.items }));
    const dispatch = useDispatch();

    console.log('cart nè', cart);

    const isItemOnCart = (id) => !!cart.find((item) => item._id == id);

    const addToCart = (product) => {
        if (isItemOnCart(product._id)) {
            dispatch(removeFromCart(product._id));
            // console.log(product._id);
            // displayActionMessage('Item removed from cart', 'info');
        } else {
            dispatch(dispatchAddToCart(product._id));
            // displayActionMessage('Item added to cart', 'success');
        }
    };

    return { cart, isItemOnCart, addToCart };
};

export default useCart;
