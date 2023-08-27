import classNames from 'classnames/bind';
import Slider from '~/component/Slider';

import styles from './JustForYou.module.scss';
import SmallNotification from '~/component/SmallNotification';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function JustForYou() {
    const sliderSettings = {
        arrows: true,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* small notify*/}

                {/* title */}
                <div className={cx('title')}>
                    <SmallNotification notify={`Just For You`} />

                    {/* button */}
                    <div className={cx('btn')}>
                        <Button outline className={cx('btn-view-all')}>
                            See All
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

export default JustForYou;
