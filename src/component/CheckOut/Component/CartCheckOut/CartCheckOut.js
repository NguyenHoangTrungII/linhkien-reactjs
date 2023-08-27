import classNames from 'classnames/bind';
import styles from './CartCheckOut.module.scss';
import InputText from '~/component/Input';
import RadioText from '~/component/RadioText/RadioText';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function CartCheckOut({ className }) {
    const cart = [
        {
            _id: 1,
            img: require('~/public/uploads/products/CPU/Thumbnail/Product_Thumbnail_570x470_cpu-intel-core-i9-12900 (1).png'),
            price: '60000',
            name: 'CPU intel core i9 12900',
        },

        {
            _id: 2,
            img: require('~/public/uploads/products/CPU/Thumbnail/Product_Thumbnail_570x470_cpu-intel-core-i9-12900 (1).png'),
            price: '60000',
            name: 'CPU intel core i9 12900',
        },
        {
            _id: 3,
            img: require('~/public/uploads/products/CPU/Thumbnail/Product_Thumbnail_570x470_cpu-intel-core-i9-12900 (1).png'),
            price: '60000',
            name: 'CPU intel core i9 12900',
        },
    ];

    return (
        <div className={cx('wrapper', className)}>
            {/* product list */}
            <div className={cx('product-detail')}>
                {cart.map((product, index) => {
                    return (
                        <div key={product._id} className={cx('card-product')}>
                            <div>
                                <img src={product.img} alt="product" className={cx('img-product')} />
                                <span>{product.name}</span>
                            </div>
                            <span>{product.price}</span>
                        </div>
                    );
                })}
            </div>

            {/* total details */}
            <div>
                <div className={cx('payment')}>
                    <span className={cx('text')}>Subtotal:</span>
                    <span className={cx('price')}>{200000}</span>
                </div>

                <div className={cx('payment')}>
                    <span className={cx('text')}>Ship:</span>
                    <span className={cx('price')}>{200000}</span>
                </div>

                <div className={cx('payment')}>
                    <span className={cx('text')}>Total:</span>
                    <span className={cx('price')}>{200000}</span>
                </div>
            </div>

            {/* payment  */}
            <div>
                {/* <div>
                    <input type="radio" name="payment" className={cx('radio-payment')} />
                    <span className={cx('radio-text')}>Cash on delivery</span>
                    <div></div>
                </div>
                <input type="radio" name="payment" className={cx('radio-payment')} /> Cash on delivery */}

                <div className={cx('payment-bank')}>
                    <RadioText text="Bank" />

                    <div className={cx('bank-img')}>
                        <img src={require('~/public/uploads/Bank/image 30.png')} alt="bank" className={cx('img')} />
                        <img src={require('~/public/uploads/Bank/image 31.png')} alt="bank" className={cx('img')} />
                        <img src={require('~/public/uploads/Bank/image 32.png')} alt="bank" className={cx('img')} />
                        <img src={require('~/public/uploads/Bank/image 33.png')} alt="bank" className={cx('img')} />
                    </div>
                </div>
                <RadioText text="Cash on delivery" className={cx('COD')} />
            </div>

            <div className={cx('coupon-apply')}>
                <InputText outline placeholder="Coupon Code" className={cx('coupon-input')} />
                <Button primary className={cx('coupon-btn')}>
                    {' '}
                    Apply Coupon
                </Button>
            </div>

            <Button primary className={cx('placeorder-btn')}>
                Place Order
            </Button>
        </div>
    );
}

export default CartCheckOut;
