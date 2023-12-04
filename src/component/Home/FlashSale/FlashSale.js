import classNames from 'classnames/bind';

import styles from './FlashSale.module.scss';
import SmallNotification from '~/component/SmallNotification';
import Button from '~/component/Button';
import Separator from '~/component/Separator/Separator';
import Slider from '~/component/Slider';
import useCart from '~/hooks/useCart';

const cx = classNames.bind(styles);

function FlashSale({ FlashSaleProduct, toast }) {
    const { addToCart } = useCart();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* small notify*/}
                <SmallNotification notify={`Today's`} />

                {/* title */}
                <div className={cx('title')}>
                    {/* title */}
                    <h1 className={cx('text-title')}>FLASH SALE</h1>
                    {/* countdown */}
                    <div className={cx('countdown')}>
                        <div className={cx('time')}>
                            <div className={cx('name-time')}>Days </div>
                            <div className={cx('num-time')}>00</div>
                        </div>
                        <div className={cx('time')}>
                            <div className={cx('name-time')}>Hours </div>
                            <div className={cx('num-time')}>00</div>
                        </div>
                        <div className={cx('time')}>
                            <div className={cx('name-time')}>Minutes </div>
                            <div className={cx('num-time')}>00</div>
                        </div>
                        <div className={cx('time')}>
                            <div className={cx('name-time')}>Seconds </div>
                            <div className={cx('num-time')}>00</div>
                        </div>
                    </div>
                </div>

                {/* <Slider /> */}
                <Slider products={FlashSaleProduct} addToCart={addToCart} toast={toast} />

                <div className={cx('btn')}>
                    <Button primary className={cx('btn-view-all')}>
                        View All Products
                    </Button>
                </div>

                {/* product */}
                {/* <div className={cx('category-list')}></div> */}

                <Separator className={cx('separator')} />
            </div>
        </div>
    );
}

export default FlashSale;
