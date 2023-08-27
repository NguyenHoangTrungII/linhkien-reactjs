import classNames from 'classnames/bind';

import styles from './Advertsing.module.scss';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function Advertsing() {
    const imgsrc = require('~/public/uploads/banner/JBL_BOOMBOX_2_HERO_020_x1.png');
    return (
        <div className={cx('wrapper')}>
            {/* content */}
            <div className={cx('content')}>
                {/* category */}
                <span className={cx('category-name')}>categories</span>
                {/* title */}
                <h1 className={cx('advertsing-name')}>Enhance Your Music Experience</h1>
                {/* countdown */}
                <div className={cx('countdown')}>
                    <div className={cx('time')}>
                        <div className={cx('num-time')}>00</div>
                        <div className={cx('name-time')}>Days </div>
                    </div>
                    <div className={cx('time')}>
                        <div className={cx('num-time')}>00</div>
                        <div className={cx('name-time')}>Hours </div>
                    </div>
                    <div className={cx('time')}>
                        <div className={cx('num-time')}>00</div>
                        <div className={cx('name-time')}>Minutes </div>
                    </div>
                    <div className={cx('time')}>
                        <div className={cx('num-time')}>00</div>
                        <div className={cx('name-time')}>Seconds </div>
                    </div>
                </div>
                {/* button */}
                <div className={cx('btn')}>
                    <Button primary className={cx('btn-buy-now')}>
                        Buy Now
                    </Button>
                </div>
            </div>
            {/* img */}
            <div className={cx('img')}>
                <div className={cx('img-background')} />
                <img src={imgsrc} className={cx('img-style')} />
            </div>
        </div>
    );
}
export default Advertsing;
