import classNames from 'classnames/bind';
import { RightOutlined, LeftOutlined } from '@ant-design/icons/lib/icons';

import styles from './FlashSale.module.scss';
import SmallNotification from '~/component/SmallNotification';
import ProductCard from '~/component/ProductCard';
import { Carousel, Stack } from 'react-bootstrap';
import Button from '~/component/Button';
import Separator from '~/component/Separator/Separator';
import Slider from '~/component/Slider';

const cx = classNames.bind(styles);

function FlashSale() {
    const reviews = [
        { _id: 1, text: 'abc' },
        { _id: 2, text: 'def' },
        { _id: 3, text: 'ghi' },
        { _id: 4, text: 'jkl' },
        { _id: 5, text: 'mno' },
        { _id: 6, text: 'pqr' },
        { _id: 7, text: 'stu' },
        { _id: 8, text: 'vwx' },
        { _id: 9, text: 'yza' },
    ];
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

                <Slider />

                <div className={cx('btn')}>
                    <Button primary className={cx('btn-view-all')}>
                        View All Products
                    </Button>
                </div>

                <Separator className={cx('separator')} />
            </div>
        </div>
    );
}

export default FlashSale;
