import classNames from 'classnames/bind';
import { RightOutlined, LeftOutlined } from '@ant-design/icons/lib/icons';

import styles from './RecommenderProduct.module.scss';
import SmallNotification from '~/component/SmallNotification';
import ProductCard from '~/component/ProductCard';
import { Carousel, Stack } from 'react-bootstrap';
import Button from '~/component/Button';
import Separator from '~/component/Separator/Separator';
import Slider from '~/component/Slider';
import useCart from '~/hooks/useCart';

const cx = classNames.bind(styles);

function RecommenderProduct({ RecomProduct = [] }) {
    const { addToCart, isItemOnCart } = useCart();

    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* small notify*/}
                    <SmallNotification notify={`Related Item`} />

                    {/* <Slider /> */}
                    <Slider products={RecomProduct} addToCart={addToCart} />
                </div>
            </div>
        </div>
    );
}

export default RecommenderProduct;
