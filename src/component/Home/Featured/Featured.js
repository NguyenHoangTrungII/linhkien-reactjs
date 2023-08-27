import classNames from 'classnames/bind';
import Slider from '~/component/Slider';

import styles from './Featured.module.scss';
import SmallNotification from '~/component/SmallNotification';
import { Link } from 'react-router-dom';
import FeaturedCard from './component/FeaturedCard';

const cx = classNames.bind(styles);

function Featured() {
    const imgsrc2 = require('~/public/uploads/featured/Featured_3.png');
    const imgsrc1 = require('~/public/uploads/featured/Featured_5.png');
    const imgsrc3 = require('~/public/uploads/featured/Featured_1.png');
    const imgsrc4 = require('~/public/uploads/featured/Featured_2.png');

    const feature = [
        {
            _id: 1,
            img: require('~/public/uploads/featured/Featured_5.png'),
            title: 'PlayStation 5',
            content: 'Black and White version of the PS5 coming out on sale.',
        },
        {
            _id: 2,
            img: require('~/public/uploads/featured/Featured_3.png'),
            title: 'Women’s Collections',
            content: 'Featured woman collections that give you another vibe.',
        },
        {
            _id: 3,
            img: require('~/public/uploads/featured/Featured_1.png'),
            title: 'Speakers',
            content: 'Amazon wireless speakers',
        },
        {
            _id: 4,
            img: require('~/public/uploads/featured/Featured_2.png'),
            title: 'Perfume',
            content: 'GUCCI INTENSE OUD EDP.',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* small notify*/}
                <SmallNotification notify={`Featured`} />

                {/* title */}
                <div className={cx('title')}>
                    {/* title */}
                    <h1 className={cx('text-title')}>New Arrival</h1>
                    {/* button */}
                </div>

                {/* content */}
                <div className={cx('rectangle-container')}>
                    <FeaturedCard size={'large'} data={feature[0]} />
                    <div className={cx('other-wrapper')}>
                        <FeaturedCard size={'medium'} data={feature[1]} />
                        <div className={cx('another-wrapper')}>
                            <FeaturedCard size={'small'} data={feature[2]} />
                            <FeaturedCard size={'small'} data={feature[3]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Featured;
