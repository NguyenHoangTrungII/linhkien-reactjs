import classNames from 'classnames/bind';
import Slider from '~/component/Slider';

import styles from './WishList.module.scss';
import SmallNotification from '~/component/SmallNotification';
import Separator from '~/component/Separator';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function WishListComp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* title */}
                <div className={cx('title')}>
                    {/* title */}
                    <h1 className={cx('text-title')}>Wish List (4)</h1>
                    {/* button */}
                    <div className={cx('btn')}>
                        <Button outline className={cx('btn-view-all')}>
                            Move All To Bag
                        </Button>
                    </div>
                </div>

                {/* product */}
                <div className={cx('category-list')}>
                    {/* <Slider /> */}
                    <Slider arrowVisible={false} />
                    {/* <Slider /> */}
                </div>
            </div>
        </div>
    );
}

export default WishListComp;
