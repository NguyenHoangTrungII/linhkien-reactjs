import classNames from 'classnames/bind';
import styles from './CartCheckOut.module.scss';
import InputText from '~/component/Input';
import RadioText from '~/component/RadioText/RadioText';
import Button from '~/component/Button/Button';
import Separator from '~/component/Separator';
import formatCurrency from '~/helpers/currencyFormatter';

import {
    Button as button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    IconButton,
    RadioGroup,
    Stack,
    TextField,
} from '@mui/material';
import FormControlContext from '@mui/material/FormControl/FormControlContext';
// import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

import { Radio } from 'antd';
import { Label, RadioButtonChecked, RemoveCircleOutline } from '@mui/icons-material';
import { CloseCircleOutlined } from '@ant-design/icons';
import { calculateTotal } from '~/helpers/totalCaculate';
import { useDispatch, useSelector } from 'react-redux';
import { CreateOrder, payment, paymentCallBack } from '~/redux/actions/orderAction';
import usePayment from '~/hooks/usePayment';
import { constructURLSearchParams } from '~/helpers/constructURLSearchParams';
import { Link, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function CartCheckOut({ className, cart = [], billingData }) {
    const dispatch = useDispatch();
    const paymentURL = usePayment();
    const paymentCallBackContent = useSelector((state) => state.order.paymentCallBack);
    const [status, setStatus] = useState(false);
    const [isRadioChecked, setIsRadioChecked] = useState(false);
    const [link, setLink] = useState('');
    const [formData, setFormData] = useState({
        orderType: '',
        amount: 10000,
        orderDescription: '',
        name: '',
    });
    const urlParams = new URLSearchParams(window.location.search);
    const vnp_Amount = urlParams.get('vnp_Amount');
    const params = constructURLSearchParams();
    const cartItem = useSelector((state) => state.cart.cartItems);

    const [sentData, setSentData] = useState({
        ...billingData,
        total: 1000,
        details: null,
    });

    const fetchingPayment = async (data) => {
        try {
            await dispatch(paymentCallBack(data));
        } catch (err) {
            console.log(err);
        }
    };

    const handleRadioChange = () => {
        setStatus(isRadioChecked);

        setIsRadioChecked(!isRadioChecked);
    };

    useEffect(() => {
        if (params.toString() !== '') {
            console.log('vào');
            fetchingPayment(params);
        }
    }, []);

    const [open, openchange] = useState(false);

    const functionopenpopup = () => {
        openchange(true);
    };

    const closepopup = () => {
        openchange(false);
    };

    const handlePlaceOrderButton = () => {
        setStatus(!status);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const fetching = async (formData) => {
        try {
            await dispatch(payment(formData));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setLink(paymentURL);
        if (link !== '') {
            window.location.href = paymentURL;
        }
    }, [paymentURL]);

    const fetchpaymentCallBack = async (params) => {
        try {
            await dispatch(paymentCallBack(params));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (!!vnp_Amount) {
            fetchpaymentCallBack(urlParams);
        }
    }, [window.location.search]);

    window.onbeforeunload = function () {
        window.location.reload();
    };

    const handleSubmit = async () => {
        try {
            console.log('Data to be sent:', formData);

            await fetching(formData);
        } catch (error) {
            console.error('Error handling submit:', error);
        }
    };

    const filterDetail = (cart) => {
        if (Array.isArray(cartItem) && cartItem.length > 0) {
            const selectedProperties = cartItem.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
                price: item.product.price,
            }));

            return selectedProperties;
        }
    };

    const generateInformationOrder = (billingData, cart) => {
        var newInfo = {
            ...billingData,
            status: '1',
            total: parseFloat(
                cart.length > 0 && calculateTotal(cart.map((item) => item.product.price * item.quantity)),
            ),
            details: filterDetail(cart),
        };

        return newInfo;
    };

    console.log(generateInformationOrder(billingData, cart));

    const createOrder = async () => {
        try {
            await dispatch(CreateOrder(generateInformationOrder(billingData, cart)));
        } catch (err) {
            console.log(err);
        }
    };

    const handlePlaceOrder = () => {
        createOrder();
    };

    return (
        <div className={cx('wrapper', className)}>
            {/* product list */}
            {/* <div className={cx('product-detail')}>
                {cart.map((product, index) => {
                    return (
                        <div key={product._id} className={cx('card-product')}>
                            <div>
                                <img src={product.img} alt="product" className={cx('img-product')} />
                                <span>{product.name}</span>
                            </div>
                            <span>{formatCurrency(product.price)}</span>
                        </div>
                    );
                })} */}
            {/* <CartDetail cart={data} /> */}
            {/* </div> */}

            {/* total details */}
            <div>
                <div className={cx('payment')}>
                    <span className={cx('text')}>Subtotal:</span>
                    <span className={cx('price')}>
                        {formatCurrency(
                            cart.length > 0 &&
                                calculateTotal(
                                    cart.map((item) => parseInt(item.product.price) * parseInt(item.quantity)),
                                ),
                        )}
                    </span>
                </div>

                <Separator className={cx('checkout-speprator')} />

                <div className={cx('payment')}>
                    <span className={cx('text')}>Ship:</span>
                    <span className={cx('price')}>{formatCurrency(200000)}</span>
                </div>

                <Separator className={cx('checkout-speprator')} />

                <div className={cx('payment')}>
                    <span className={cx('text')}>Total:</span>
                    <span className={cx('price')}>
                        {' '}
                        {formatCurrency(
                            parseFloat(
                                cart.length > 0 &&
                                    calculateTotal(cart.map((item) => item.product.price * item.quantity)),
                            ) + +200000,
                        )}
                    </span>
                </div>
            </div>

            {/* payment  */}
            <div className={cx('payment-method')}>
                {/* <div>
                    <input type="radio" name="payment" className={cx('radio-payment')} />
                    <span className={cx('radio-text')}>Cash on delivery</span>
                    <div></div>
                </div>
                <input type="radio" name="payment" className={cx('radio-payment')} /> Cash on delivery */}
                <div className={cx('payment-bank')}>
                    <input
                        type="radio"
                        className={cx('radiobtn')}
                        name="radio-buttons"
                        onClick={functionopenpopup}
                        checked={paymentCallBackContent.success ? paymentCallBackContent.success : false}
                        disabled={paymentCallBackContent.success ? paymentCallBackContent.success : false}
                    />

                    <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
                        <DialogTitle className={cx('heading-dialog')}>
                            <h1 className={cx('title')}>Billing Details</h1>
                            <IconButton onClick={closepopup} style={{ float: 'right' }}>
                                <CloseCircleOutlined className={cx('close-icon')} />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent>
                            {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                            <Stack spacing={2} margin={2}>
                                <span className={cx('input-title')}>Order type:</span>
                                <TextField
                                    name="orderType"
                                    className={cx('input-title')}
                                    variant="outlined"
                                    onChange={handleChange}
                                    value={formData.orderType}
                                ></TextField>
                                <span className={cx('input-title')}>Name</span>
                                <TextField
                                    name="name"
                                    className={cx('input-title')}
                                    variant="outlined"
                                    onChange={handleChange}
                                    value={formData.name}
                                ></TextField>
                                <span className={cx('input-title')}>Total</span>
                                <TextField
                                    name="amount"
                                    className={cx('input-title')}
                                    variant="outlined"
                                    disabled
                                    defaultValue="100"
                                    value={formData.amount}
                                ></TextField>
                                <span className={cx('input-title')}>Content</span>
                                <TextField
                                    name="orderDescription"
                                    className={cx('input-title')}
                                    variant="outlined"
                                    onChange={handleChange}
                                    value={formData.orderDescription}
                                ></TextField>

                                <Button color="outline" onClick={handleSubmit} variant="contained">
                                    PAYMENT NOW
                                </Button>
                            </Stack>
                        </DialogContent>
                        <DialogActions></DialogActions>
                    </Dialog>

                    <div className={cx('bank-img')}>
                        <img src={require('~/public/uploads/Bank/image 30.png')} alt="bank" className={cx('img')} />
                        <img src={require('~/public/uploads/Bank/image 31.png')} alt="bank" className={cx('img')} />
                        <img src={require('~/public/uploads/Bank/image 32.png')} alt="bank" className={cx('img')} />
                        <img src={require('~/public/uploads/Bank/image 33.png')} alt="bank" className={cx('img')} />
                    </div>
                </div>
                <div className={'COD-option'}>
                    {/* <Radio className={cx('COD')} name="radio-buttons" /> */}
                    <input
                        type="radio"
                        className={cx('COD-option')}
                        name="radio-buttons"
                        onClick={handleRadioChange}
                        checked={isRadioChecked}
                        disabled={paymentCallBackContent.success ? paymentCallBackContent.success : false}
                    />

                    <div>
                        <label>Cash on delivery</label>
                    </div>
                </div>
            </div>

            <div className={cx('coupon-apply')}>
                <InputText outline placeholder="Coupon Code" className={cx('coupon-input')} />
                <Button primary className={cx('coupon-btn')}>
                    {' '}
                    Apply Coupon
                </Button>
            </div>

            <Button primary className={cx('placeorder-btn')} disable={status} onClick={handlePlaceOrder}>
                Place Order
            </Button>
        </div>
    );
}

export default CartCheckOut;
