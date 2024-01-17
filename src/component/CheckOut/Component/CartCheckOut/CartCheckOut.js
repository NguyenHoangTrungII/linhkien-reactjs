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
import { useState } from 'react';

import { Radio } from 'antd';
import { Label, RadioButtonChecked, RemoveCircleOutline } from '@mui/icons-material';
import { CloseCircleOutlined } from '@ant-design/icons';
import { calculateTotal } from '~/helpers/totalCaculate';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function CartCheckOut({ className, cart = [] }) {
    const [status, setStatus] = useState(false);
    const [link, setLink] = useState('');

    const [open, openchange] = useState(false);
    console.log(cart);
    const functionopenpopup = () => {
        openchange(true);

        //dont shoule, will change soon
        setStatus(!status);
    };

    const closepopup = () => {
        openchange(false);
    };

    const handlePayment = () => {};

    const handlePlaceOrderButton = () => {
        setStatus(!status);
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
                    {/* <Radio
                        onClick={functionopenpopup}
                        text="Bank"
                        // color="#DB4444"
                        className={cx('radiobtn')}
                        name="radio-buttons"
                    /> */}
                    <input type="radio" className={cx('radiobtn')} name="radio-buttons" onClick={functionopenpopup} />

                    {/* <Button onClick={functionopenpopup} color="primary" variant="contained">
                        Open Popup
                    </Button> */}

                    <Dialog
                        // fullScreen
                        open={open}
                        onClose={closepopup}
                        fullWidth
                        maxWidth="sm"
                    >
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
                                <TextField className={cx('input-title')} variant="outlined"></TextField>
                                <span className={cx('input-title')}>Name</span>
                                <TextField className={cx('input-title')} variant="outlined"></TextField>
                                <span className={cx('input-title')}>Total</span>
                                <TextField
                                    className={cx('input-title')}
                                    variant="outlined"
                                    disabled
                                    defaultValue="100"
                                ></TextField>
                                <span className={cx('input-title')}>Content</span>
                                <TextField className={cx('input-title')} variant="outlined"></TextField>

                                <Button color="outline" onClick={handlePayment} variant="contained" href={link}>
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
                        onClick={handlePlaceOrderButton}
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

            <Button primary className={cx('placeorder-btn')} disable={!status}>
                Place Order
            </Button>
        </div>
    );
}

export default CartCheckOut;
