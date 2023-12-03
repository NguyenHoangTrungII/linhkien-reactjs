import classNames from 'classnames/bind';
import Slider from '~/component/Slider';

import styles from './BestSelling.js.module.scss';
import SmallNotification from '~/component/SmallNotification';
import Separator from '~/component/Separator';
import Button from '~/component/Button';
import useCart from '~/hooks/useCart';

const cx = classNames.bind(styles);

function BestSelling({ BestSellProduct, toast }) {
    const { addToCart, isItemOnCart, isOnCart } = useCart();

    const sliderSettings = {
        arrows: true,
    };

    // console.log(addToCart);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* small notify*/}
                <SmallNotification notify={`This Month`} />

                {/* title */}
                <div className={cx('title')}>
                    {/* title */}
                    <h1 className={cx('text-title')}>Best Selling Product</h1>
                    {/* button */}
                    <div className={cx('btn')}>
                        <Button primary className={cx('btn-view-all')}>
                            View All
                        </Button>
                    </div>
                </div>

                {/* product */}
                <div className={cx('category-list')}>
                    {/* <Slider /> */}
                    <Slider arrowVisible={false} products={BestSellProduct} addToCart={addToCart} toast={toast} />
                    {/* <Slider /> */}
                </div>

                <Separator className={cx('separator')} />
            </div>
        </div>
    );
}
export default BestSelling;
