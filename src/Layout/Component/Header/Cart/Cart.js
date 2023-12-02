import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import config from '~/config';
import styles from './Cart.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import CardHorizontal from '~/component/CardHorizontal';
import { fetchCart } from '~/redux/actions/cartAction';

const cx = classNames.bind(styles);
function Cart() {
    useEffect(() => {
        const fetching = async () => {
            try {
                await dispatch(fetchCart());
            } catch (err) {
                console.log(err);
            }
        };
        fetching();
    }, []);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cart.cartItems);
    return (
        <Tippy
            interactive
            placement="top-end"
            trigger="mouseenter"
            delay={[0, 0]}
            render={(attrs) => (
                <div className={cx('cart-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('cart-title')}>My cart</h4>

                        {data.length > 0 ? (
                            <>
                                {data.slice(0, 5).map((result) => (
                                    <CardHorizontal key={result._id} data={result} isPrice={true} />
                                ))}

                                {data.length > 5 && (
                                    <h4 className={cx('cart-bottom')}>
                                        <Link>{`${data.length - 5} another products`}</Link>
                                    </h4>
                                )}
                            </>
                        ) : (
                            <div className={cx('cart-empty')}>
                                <img src={require('~/public/uploads/cart/empty_cart.png')} />
                            </div>
                        )}
                    </PopperWrapper>
                </div>
            )}
        >
            <Link to={config.routes.cart} className={cx('cart')}>
                <ShoppingCartOutlined className={cx('cart-icon')} value={data.length > 99 ? '99+' : data.length} />
                {/* <div className={cx('cart-qty')}>12</div> */}
            </Link>
        </Tippy>
    );
}

export default Cart;
