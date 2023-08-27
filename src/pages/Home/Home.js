import classNames from 'classnames/bind';

import HeroBanner from '~/component/HeroBanner';
import FlashSale from '~/component/Home/FlashSale';
import BrowseCategory from '~/component/Home/BrowseCategory';
import BestSelling from '~/component/Home/BestSelling';
import Advertsing from '~/component/Home/Advertsing';
import OurProduct from '~/component/Home/OurProduct';
import Featured from '~/component/Home/Featured';

function Home() {
    return (
        <div>
            <HeroBanner />

            <FlashSale />

            <BrowseCategory />

            <BestSelling />

            <Advertsing />

            <OurProduct />

            <Featured />
        </div>
    );
}

export default Home;
