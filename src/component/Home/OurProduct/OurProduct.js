import classNames from 'classnames/bind';
import Slider from '~/component/Slider';

import styles from './OurProduct.module.scss';
import SmallNotification from '~/component/SmallNotification';
import Separator from '~/component/Separator';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function OurProduct() {
    const sliderSettings = {
        arrows: true,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* small notify*/}
                <SmallNotification notify={`Our Product`} />

                {/* title */}
                <div className={cx('title')}>
                    {/* title */}
                    <h1 className={cx('text-title')}>Explore Our Products</h1>
                    {/* button */}
                </div>

                {/* product */}
                <div className={cx('category-list')}>
                    {/* <Slider /> */}
                    <Slider arrowVisible={true} rowNumber={2} />
                    {/* <Slider /> */}
                </div>

                {/* button */}
                <div className={cx('btn')}>
                    <Button primary className={cx('btn-view-all')}>
                        View All Products
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default OurProduct;
